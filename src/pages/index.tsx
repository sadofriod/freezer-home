import AutoPlayVideo from "./components/AutoPlayVideo";
import { S3Conf } from "../lib/hooks/useS3Source";
import { AnimationBackground } from "./components/AnimationBackground";
import FeaturesContext from "./components/FeaturesContext";
import FeaturesList from "./components/FeaturesList";
import { appWithTranslation, useTranslation } from 'next-i18next';
import { nextI18nConf } from '../../next-i18n-conf';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { loadEnvConfig } from '@next/env'
import Image from "next/image";
import DiscordIcon from "./components/DiscordIcon";
import { GoogleTagManager } from '@next/third-parties/google'

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nConf, nextI18nConf.i18n.locales)),
      ...process.env
    },
  }
};

type Props = Awaited<ReturnType<typeof getServerSideProps>>['props'] & {
  NEXT_REGION: string;
  NEXT_BUCKET_NAME: string;
  NEXT_ACCESS_KEY_ID: string;
  NEXT_SECRET_ACCESS: string;
}

function Home(props: Props) {
  const { t } = useTranslation('common');

  const s3Conf: S3Conf = {
    region: props.NEXT_REGION as string,
    bucketName: props.NEXT_BUCKET_NAME as string,
    accessKeyId: props.NEXT_ACCESS_KEY_ID as string,
    secretAccessKey: props.NEXT_SECRET_ACCESS as string
  };

  return (
    <>
    <GoogleTagManager gtmId="GTM-N4SNL37C" />
    <div className="app-container">
      <div className="mobile-top-banner" />
      <Image className="home-logo" src="/logo.png" alt="logo" width={100} height={100} />
      <div className="container" >
        <AnimationBackground />
        <div className="home-title-container">
          <h1 className="home-main-title">{t('title')}</h1>
          <h3>
            {t('subtitle1')}
          </h3>
          <h3>
            {t('subtitle2')}
          </h3>
          <h3>
            {t('subtitle3')}
          </h3>
        </div>
        <FeaturesContext>
          <div className="video-container" >
            <AutoPlayVideo s3Conf={s3Conf} />
          </div>
          <FeaturesList />
        </FeaturesContext>
      </div>
      <a className="contact-us-button" href="https://discord.gg/pPDFG42hxr" target="_blank">
        <DiscordIcon/>
        Contact Us
      </a>
    </div>
    </>
  );
}

export default appWithTranslation(Home as any); //eslint-disable-line