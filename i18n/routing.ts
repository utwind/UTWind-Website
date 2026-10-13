import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "nl", "de", "pl", "el","es"],

  defaultLocale: "en"
});