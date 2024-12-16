import type { NextConfig } from "next";
import { nextI18nConf } from "./next-i18n-conf";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: nextI18nConf.i18n,
};

export default nextConfig;
