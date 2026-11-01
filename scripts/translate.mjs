import * as deepl from "deepl-node";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config({ path: ".env.local" });

const apiKey = process.env.DEEPL_API_KEY;

if (!apiKey) {
  console.error("❌ DEEPL_API_KEY was not found in .env.local");
  process.exit(1);
}

const translator = new deepl.Translator(apiKey);

const messagesDir = path.join(process.cwd(), "messages");
const englishPath = path.join(messagesDir, "en.json");
const cachePath = path.join(process.cwd(), "translation-cache.json");

// English is the master file
const english = JSON.parse(fs.readFileSync(englishPath, "utf8"));

// Every language will now update automatically
const languages = [
  {
    code: "fr",
    deepl: "fr",
    name: "French",
  },
  {
    code: "nl",
    deepl: "nl",
    name: "Dutch",
  },
  {
    code: "de",
    deepl: "de",
    name: "German",
  },
  {
    code: "pl",
    deepl: "pl",
    name: "Polish",
  },
  {
    code: "el",
    deepl: "el",
    name: "Greek",
  },
  {
    code: "es",
    deepl: "es",
    name: "Spanish",
  },
];

// Load translation cache
let cache = {};

if (fs.existsSync(cachePath)) {
  try {
    cache = JSON.parse(fs.readFileSync(cachePath, "utf8"));
  } catch {
    console.warn("⚠️ Could not read translation-cache.json. Starting fresh.");
    cache = {};
  }
}

/**
 * Translate with retries for temporary DeepL/API errors.
 */
async function translateWithRetry(text, targetLanguage, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const result = await translator.translateText(
        text,
        "en",
        targetLanguage
      );

      return result.text;
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }

      const delay = attempt * 2000;

      console.log(
        `   ⚠️ Translation failed. Retrying in ${delay / 1000}s...`
      );

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

/**
 * Recursively create the translated object.
 *
 * Rules:
 *
 * Same path + same English text
 * → use cached translation
 *
 * Same path + changed English text
 * → translate again
 *
 * New path
 * → translate
 *
 * Renamed key
 * → treated as new path and translated
 *
 * Deleted English key
 * → disappears from translated JSON
 */
async function syncTranslations(
  englishObject,
  languageCode,
  deeplLanguage,
  currentPath = ""
) {
  const output = {};

  if (!cache[languageCode]) {
    cache[languageCode] = {};
  }

  for (const [key, value] of Object.entries(englishObject)) {
    const keyPath = currentPath
      ? `${currentPath}.${key}`
      : key;

    // Nested object
    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      output[key] = await syncTranslations(
        value,
        languageCode,
        deeplLanguage,
        keyPath
      );

      continue;
    }

    // Arrays are copied as-is
    if (Array.isArray(value)) {
      output[key] = value;
      continue;
    }

    // Non-string values are copied as-is
    if (typeof value !== "string") {
      output[key] = value;
      continue;
    }

    const cachedEntry = cache[languageCode][keyPath];

    // Nothing changed → reuse existing translation
    if (
      cachedEntry &&
      cachedEntry.source === value &&
      cachedEntry.translation
    ) {
      output[key] = cachedEntry.translation;

      console.log(`   ✓ Cached: ${keyPath}`);

      continue;
    }

    // English changed OR key is new
    console.log(`   🌐 Translating: ${keyPath}`);

    const translatedText = await translateWithRetry(
      value,
      deeplLanguage
    );

    output[key] = translatedText;

    cache[languageCode][keyPath] = {
      source: value,
      translation: translatedText,
    };

    // Save cache continuously in case script is interrupted
    fs.writeFileSync(
      cachePath,
      JSON.stringify(cache, null, 2),
      "utf8"
    );
  }

  return output;
}

/**
 * Remove cache entries whose paths no longer exist
 * in en.json.
 */
function collectEnglishPaths(object, currentPath = "", paths = new Set()) {
  for (const [key, value] of Object.entries(object)) {
    const keyPath = currentPath
      ? `${currentPath}.${key}`
      : key;

    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      collectEnglishPaths(value, keyPath, paths);
    } else {
      paths.add(keyPath);
    }
  }

  return paths;
}

function cleanCache(languageCode, validPaths) {
  if (!cache[languageCode]) return;

  for (const cachedPath of Object.keys(cache[languageCode])) {
    if (!validPaths.has(cachedPath)) {
      console.log(`   🗑 Removed old key: ${cachedPath}`);
      delete cache[languageCode][cachedPath];
    }
  }
}

async function main() {
  console.log("\n🌍 UTWind Translation Updater");
  console.log("================================\n");

  const validEnglishPaths = collectEnglishPaths(english);

  // Automatically run EVERY language
  for (const language of languages) {
    console.log(`\n🔵 Updating ${language.name} (${language.code})...`);

    try {
      cleanCache(language.code, validEnglishPaths);

      const translated = await syncTranslations(
        english,
        language.code,
        language.deepl
      );

      const outputPath = path.join(
        messagesDir,
        `${language.code}.json`
      );

      fs.writeFileSync(
        outputPath,
        JSON.stringify(translated, null, 2) + "\n",
        "utf8"
      );

      console.log(
        `✅ ${language.name} updated → messages/${language.code}.json`
      );
    } catch (error) {
      console.error(
        `❌ Failed to update ${language.name}:`,
        error.message
      );
    }
  }

  // Final cache save
  fs.writeFileSync(
    cachePath,
    JSON.stringify(cache, null, 2) + "\n",
    "utf8"
  );

  console.log("\n================================");
  console.log("✅ All languages updated!");
  console.log("================================\n");
}

main().catch((error) => {
  console.error("❌ Translation script failed:", error);
  process.exit(1);
});