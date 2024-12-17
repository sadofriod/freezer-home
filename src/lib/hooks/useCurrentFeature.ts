"use client"

import { useEffect, useState } from "react";
import { VideoType } from "../../pages/components/AutoPlayVideo";

const video = [
  {
    type: 'ticket',
    duration: 21000
  },
  {
    type: 'fruit',
    duration: 18000
  },
  {
    type: 'info',
    duration: 16000
  }
]

export type ManualChange = (type: VideoType) => void;

export const useCurrentFeature = () => {
  const [currentFeature, setCurrentFeature] = useState<VideoType>(video[0].type as VideoType);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const handleAutoTypeChange = (nextIndex: number) => {    
    setCurrentFeature(video[nextIndex].type as VideoType);
  };

  const manualChange = (type: VideoType) => {
    const index = video.findIndex(v => v.type === type);
    if (index === -1) return;
    setCurrentFeature(video[index].type as VideoType);
  };

  useEffect(() => {
    if (isEnd) {
      const currentFeatureIndex = video.findIndex(v => v.type === currentFeature);
      const nextIndex = currentFeatureIndex + 1 >= video.length ? 0 : currentFeatureIndex + 1;
      handleAutoTypeChange(nextIndex);
    }
  }, [isEnd]);//eslint-disable-line react-hooks/exhaustive-deps

  return { currentFeature, manualChange, setIsEnd: (end: boolean) => setIsEnd(end) };

};
