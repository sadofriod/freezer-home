"use client"

import { useEffect, useState } from "react";
import { VideoType } from "../components/AutoPlayVideo";

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
  const [timer, setTimer] = useState<number>(NaN);
  const handleAutoTypeChange = (currentIndex = 0) => {
    if (!isNaN(timer)) {
      window.clearTimeout(timer);
    }
    
    setCurrentFeature(video[currentIndex].type as VideoType);
    
    const newTimer = window.setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= video.length) {
        handleAutoTypeChange(0);
      } else {
        console.log(video[nextIndex].type);
        
        handleAutoTypeChange(nextIndex);
      }
    }, video[currentIndex].duration);
    setTimer(newTimer);
  };

  const manualChange = (type: VideoType) => {
    if (!isNaN(timer)) {
      window.clearTimeout(timer);
    }
    const index = video.findIndex(v => v.type === type);
    if (index === -1) return;
    setCurrentFeature(video[index].type as VideoType);
    handleAutoTypeChange(index);
  };

  useEffect(() => {
    handleAutoTypeChange();
  }, []);//eslint-disable-line react-hooks/exhaustive-deps

  return { currentFeature, manualChange };

};