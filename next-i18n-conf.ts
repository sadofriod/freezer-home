import { UserConfig } from "next-i18next";
import path from "path";

export const nextI18nConf = {
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./public/locales"),
} satisfies UserConfig;