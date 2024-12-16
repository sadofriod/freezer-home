'use client';

import React, { useContext } from 'react';
import { S3Conf, useS3Source } from '../hooks/useS3Source';
import { FeatureContext } from './FeaturesContext';

export type VideoType = 'ticket' | 'fruit' | 'info';

const AutoPlayVideo: React.FC<{
  s3Conf: S3Conf;
}> = ({ s3Conf }) => {
  const {currentFeature} = useContext(FeatureContext)

  const { data: videoSrc, error, isLoading } = useS3Source(
    `freezer-note-home-assest/${currentFeature}.webm`, s3Conf
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading video</div>;
  
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
      <video key={videoSrc} height={768} width={376} autoPlay muted loop>
        <source src={videoSrc} type="video/webm" />
      </video>
    </div>
  );
};

export default AutoPlayVideo;