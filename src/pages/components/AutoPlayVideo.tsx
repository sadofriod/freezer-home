'use client';

import React, { useContext } from 'react';
import { useS3Source, S3Conf } from '../../lib/hooks/useS3Source';
import { FeatureContext } from './FeaturesContext';

export type VideoType = 'ticket' | 'fruit' | 'info';

const AutoPlayVideo: React.FC<{
  s3Conf: S3Conf;
}> = ({ s3Conf }) => {
  const { currentFeature, setIsEnd } = useContext(FeatureContext)

  const { data: videoSrc, error, isLoading } = useS3Source(
    `freezer-note-home-assest/${currentFeature}.webm`, s3Conf
  );
  if (error) return <div>Error loading video</div>;
  const handleEnd = () => {
    setIsEnd(true);
  }
  const handleCanPlay = () => {
    setIsEnd(false);
  }
  return (
    <div style={{
      border: '10px solid black',
      borderRadius: '56px',
      height: '768px',
      width: '372px',
      overflow: 'hidden',
      background: '#fff7f7',
      paddingTop: ' 30px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.2)',
    }} className='video-scale'>
      <div style={{
        background: 'black',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        height: '30px',
        width: '55%',
        position: 'absolute',
        top: '0',
      }} />
      {isLoading && <div style={{
        height: '768px',
        width: '372px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        flex: 1,
        position: 'absolute',
        top: '0',
        left: '0',
      }}>Loading...</div>}
      <video style={{
        visibility: isLoading ? 'hidden' : 'visible',
      }} key={videoSrc} onEnded={handleEnd} onCanPlay={handleCanPlay} height={768} width={376} autoPlay muted>
        <source src={videoSrc} type="video/webm" />
      </video>
    </div>
  );
};

export default AutoPlayVideo;