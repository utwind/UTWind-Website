import * as deepl from "deepl-node";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const authKey = process.env.DEEPL_API_KEY;

if (!authKey) {
  throw new Error("DEEPL_API_KEY is missing from .env.local");
}

const translator = new deepl.Translator(authKey);

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const english = JSON.parse(
  fs.readFileSync("./messages/en.json", "utf8")
);

async function translateWithRetry(
  text,
  targetLanguage,
  retries = 5
) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const result = await translator.translateText(
        text,
        "en",
        targetLanguage
      );

      await sleep(250);

      return result.text;
    } catch (error) {
      if (
        error?.name === "TooManyRequestsError" ||
        String(error).includes("Too many requests")
      ) {
        const waitTime = 2000 * (attempt + 1);

        console.log(
          `DeepL rate limit. Waiting ${waitTime / 1000}s...`
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

async function translateObject(obj, targetLanguage) {
  const translated = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      translated[key] = await translateWithRetry(
        value,
        targetLanguage
      );
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      translated[key] = await translateObject(
        value,
        targetLanguage
      );
    } else {
      translated[key] = value;
    }
  }

  return translated;
}

async function main() {
  const languages = [
    { code: "fr", file: "fr.json", name: "French" },
    { code: "nl", file: "nl.json", name: "Dutch" },
    { code: "de", file: "de.json", name: "German" },
    { code: "pl", file: "pl.json", name: "Polish" },
    { code: "el", file: "el.json", name: "Greek" },
    { code: "es", file: "es.json", name: "Spanish" },
  ];

  for (const language of languages) {
    const filePath = `./messages/${language.file}`;

    if (fs.existsSync(filePath)) {
      console.log(`⏭️ ${language.name} already exists, skipping...`);
      continue;
    }

    console.log(`Translating English → ${language.name}...`);

    const translated = await translateObject(
      english,
      language.code
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(translated, null, 2),
      "utf8"
    );

    console.log(`✅ ${language.name} translations generated!`);
  }
}

main().catch(console.error);