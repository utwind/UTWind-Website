"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (newLocale: "en" | "fr") => {
    router.replace(pathname, {
      locale: newLocale,
    });
  };

  return (
    <div className="flex items-center gap-3">
      {/* English / UK */}
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
        className={`rounded-md p-1 transition ${
          locale === "en"
            ? "ring-2 ring-blue-500"
            : "hover:ring-2 hover:ring-gray-300"
        }`}
      >
        <Image
          src="/images/Language Icons/uk.png"
          alt="English"
          width={32}
          height={22}
          className="rounded-sm object-cover"
        />
      </button>

      {/* French */}
      <button
        type="button"
        onClick={() => changeLanguage("fr")}
        aria-label="Passer au français"
        className={`rounded-md p-1 transition ${
          locale === "fr"
            ? "ring-2 ring-blue-500"
            : "hover:ring-2 hover:ring-gray-300"
        }`}
      >
        <Image
          src="/images/Language Icons/france.png"
          alt="Français"
          width={32}
          height={22}
          className="rounded-sm object-cover"
        />
      </button>
    </div>
  );
}