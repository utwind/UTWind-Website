import fs from "fs";
import dotenv from "dotenv";
import * as deepl from "deepl-node";
import readline from "readline";

dotenv.config({ path: ".env.local" });

const translator = new deepl.Translator(
  process.env.DEEPL_API_KEY
);

const ENGLISH_FILE = "./messages/en.json";
const CACHE_FILE = "./translation-cache.json";

const languages = [
  { code: "fr", file: "fr.json", name: "French" },
  { code: "nl", file: "nl.json", name: "Dutch" },
  { code: "de", file: "de.json", name: "German" },
  { code: "pl", file: "pl.json", name: "Polish" },
  { code: "el", file: "el.json", name: "Greek" },
  { code: "es", file: "es.json", name: "Spanish" },
];

if (!process.env.DEEPL_API_KEY) {
  throw new Error(
    "DEEPL_API_KEY is missing from .env.local"
  );
}

if (!fs.existsSync(ENGLISH_FILE)) {
  throw new Error(
    `Could not find ${ENGLISH_FILE}`
  );
}

const english = JSON.parse(
  fs.readFileSync(ENGLISH_FILE, "utf8")
);

let cache = {};

if (fs.existsSync(CACHE_FILE)) {
  try {
    cache = JSON.parse(
      fs.readFileSync(CACHE_FILE, "utf8")
    );
  } catch {
    console.log(
      "⚠️ Could not read translation cache. Starting with a new cache."
    );

    cache = {};
  }
}

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

function askQuestion(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();

      resolve(
        answer.trim().toLowerCase()
      );
    });
  });
}

async function translateWithRetry(
  text,
  targetLanguage,
  retries = 5
) {
  for (
    let attempt = 0;
    attempt < retries;
    attempt++
  ) {
    try {
      const result =
        await translator.translateText(
          text,
          "en",
          targetLanguage
        );

      await sleep(250);

      return result.text;
    } catch (error) {
      const isRateLimit =
        error?.name === "TooManyRequestsError" ||
        String(error).includes(
          "Too many requests"
        );

      if (isRateLimit) {
        const waitTime =
          2000 * (attempt + 1);

        console.log(
          `⏳ Rate limit reached. Waiting ${
            waitTime / 1000
          } seconds...`
        );

        await sleep(waitTime);
      } else {
        throw error;
      }
    }
  }

  throw new Error(
    `Translation failed after ${retries} attempts for ${targetLanguage}`
  );
}

async function syncObject(
  englishObject,
  existingObject,
  languageCode,
  currentPath = ""
) {
  const result = {};

  cache[languageCode] ??= {};

  for (const [key, englishValue] of Object.entries(
    englishObject
  )) {
    const existingValue =
      existingObject?.[key];

    const fullPath = currentPath
      ? `${currentPath}.${key}`
      : key;

    // STRING
    if (
      typeof englishValue === "string"
    ) {
      const cachedEntry =
        cache[languageCode][fullPath];

      /*
        Reuse translation ONLY when:
        - exact same key/path
        - exact same English text
        - translation already exists
      */
      if (
        cachedEntry &&
        cachedEntry.source ===
          englishValue &&
        cachedEntry.translation
      ) {
        result[key] =
          cachedEntry.translation;

        console.log(
          `✅ Unchanged: ${languageCode} → ${fullPath}`
        );

        continue;
      }

      /*
        If there is no cache yet but an existing
        translated value exists, translate it again
        because we cannot safely confirm the English
        source hasn't changed.
      */

      console.log(
        `🌍 Translating: ${languageCode} → ${fullPath}`
      );

      const translated =
        await translateWithRetry(
          englishValue,
          languageCode
        );

      result[key] = translated;

      cache[languageCode][fullPath] = {
        source: englishValue,
        translation: translated,
      };

      continue;
    }

    // NESTED OBJECT
    if (
      typeof englishValue ===
        "object" &&
      englishValue !== null &&
      !Array.isArray(englishValue)
    ) {
      result[key] =
        await syncObject(
          englishValue,
          existingValue ?? {},
          languageCode,
          fullPath
        );

      continue;
    }

    // ARRAY / NUMBER / BOOLEAN / ETC.
    result[key] = englishValue;
  }

  return result;
}

function cleanCacheForLanguage(
  englishObject,
  languageCode,
  currentPath = "",
  validPaths = new Set()
) {
  for (const [key, value] of Object.entries(
    englishObject
  )) {
    const fullPath = currentPath
      ? `${currentPath}.${key}`
      : key;

    if (typeof value === "string") {
      validPaths.add(fullPath);
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      cleanCacheForLanguage(
        value,
        languageCode,
        fullPath,
        validPaths
      );
    }
  }

  if (currentPath === "") {
    const languageCache =
      cache[languageCode] ?? {};

    for (const cachedPath of Object.keys(
      languageCache
    )) {
      if (!validPaths.has(cachedPath)) {
        delete languageCache[cachedPath];

        console.log(
          `🗑️ Removed old cache key: ${languageCode} → ${cachedPath}`
        );
      }
    }

    cache[languageCode] =
      languageCache;
  }
}

async function main() {
  console.log(
    "\n🌐 UTWind Translation Updater\n"
  );

  for (const language of languages) {
    const answer =
      await askQuestion(
        `Translate/update ${language.name}? (y/n): `
      );

    if (
      answer !== "y" &&
      answer !== "yes"
    ) {
      console.log(
        `⏭️ Skipping ${language.name}\n`
      );

      continue;
    }

    const filePath =
      `./messages/${language.file}`;

    let existing = {};

    if (fs.existsSync(filePath)) {
      try {
        existing = JSON.parse(
          fs.readFileSync(
            filePath,
            "utf8"
          )
        );
      } catch {
        console.log(
          `⚠️ ${language.file} could not be read. Rebuilding it from scratch.`
        );

        existing = {};
      }
    }

    console.log(
      `\n🌍 Updating ${language.name}...\n`
    );

    const translated =
      await syncObject(
        english,
        existing,
        language.code
      );

    cleanCacheForLanguage(
      english,
      language.code
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        translated,
        null,
        2
      ),
      "utf8"
    );

    console.log(
      `\n✅ ${language.name} updated!\n`
    );
  }

  fs.writeFileSync(
    CACHE_FILE,
    JSON.stringify(
      cache,
      null,
      2
    ),
    "utf8"
  );

  console.log(
    "🎉 Translation update finished!"
  );
}

main().catch((error) => {
  console.error(
    "\n❌ Translation script failed:"
  );

  console.error(error);

  process.exit(1);
});