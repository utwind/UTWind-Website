"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../i18n/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const languages = [
    {
      code: "en",
      label: "EN",
      name: "English",
      image: "/images/Language Icons/uk.png",
    },
    {
      code: "fr",
      label: "FR",
      name: "Français",
      image: "/images/Language Icons/france.png",
    },
    {
      code: "nl",
      label: "NL",
      name: "Nederlands",
      image: "/images/Language Icons/netherlands.png",
    },
    {
      code: "de",
      label: "DE",
      name: "Deutsch",
      image: "/images/Language Icons/germany.png",
    },
    {
      code: "pl",
      label: "PL",
      name: "Polski",
      image: "/images/Language Icons/poland.png",
    },
    {
      code: "el",
      label: "EL",
      name: "Ελληνικά",
      image: "/images/Language Icons/greece.png",
    },
    {
      code: "es",
      label: "ES",
      name: "Español",
      image: "/images/Language Icons/spain.png",
    },
  ] as const;

  const currentLanguage =
    languages.find((language) => language.code === locale) ?? languages[0];

  const changeLanguage = (
    newLocale: "en" | "fr" | "nl" | "de" | "pl" | "el" | "es"
  ) => {
    router.replace(pathname, {
      locale: newLocale,
    });

    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Current language button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm hover:bg-gray-50 transition"
        aria-label="Select language"
      >
        <Image
          src={currentLanguage.image}
          alt={currentLanguage.name}
          width={28}
          height={20}
          className="rounded-sm object-cover"
        />

        <span className="text-sm font-semibold text-gray-700">
          {currentLanguage.label}
        </span>

        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg z-50 overflow-hidden">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition ${
                locale === language.code
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
            >
              <Image
                src={language.image}
                alt={language.name}
                width={28}
                height={20}
                className="rounded-sm object-cover"
              />

              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">
                  {language.label}
                </span>

                <span className="text-sm text-gray-500">
                  {language.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}