import AutoPlayVideo, { VideoType } from "./components/AutoPlayVideo";
import { loadEnvConfig } from '@next/env'
import { S3Conf } from "./hooks/useS3Source";
import { AnimationBackground } from "./components/AnimationBackground";
import { AutoChange } from "./components/AutoChange";
import { ManualChange } from "./hooks/useCurrentFeature";

declare global {
  interface Window {
    manualChange: ManualChange;
  }
}

const projectDir = process.cwd()
loadEnvConfig(projectDir)


const getManualChangeFunc = (manualChange: ManualChange) => {
  window.manualChange = manualChange;
}
export default function Home() {
  const s3Conf: S3Conf = {
    region: process.env.NEXT_REGION as string,
    bucketName: process.env.NEXT_BUCKET_NAME as string,
    accessKeyId: process.env.NEXT_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_SECRET_ACCESS as string
  };

  const handleAutoChange = (feature: VideoType) => {
    console.log(feature);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100vh',
      width: '100vw',
      color: '#000'
    }}>
      <AnimationBackground />
      <div>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold'
        }}>Freezer Note</h1>
        <h3>
          Provides a new recognition method, it can be more accurate can be extracted
        </h3>
        <h3>
          from the text of the food package expiration time
        </h3>
        <h3>
          preservation method and production date.
        </h3>
      </div>
      <AutoPlayVideo filename="ticket" s3Conf={s3Conf} />
      <div>
        <div style={{
        }}>
          <h2>Features</h2>
          <ul>
            <li>Keep track of your groceries</li>
            <li>Get notified when your groceries are running low</li>
            <li>Get notified when your groceries are expiring</li>
          </ul>
        </div>
      </div>
      <AutoChange onChange={handleAutoChange} setManageChange={getManualChangeFunc} />
    </div>
  );
}
