import "@/styles/globals.css";
import "@/styles/animation.css";
import "@/styles/mobile.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { nextI18nConf } from "../../next-i18n-conf";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'
import { GoogleAnalytics } from "nextjs-google-analytics";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </AppCacheProvider>
  )
}

export default appWithTranslation(App, nextI18nConf);