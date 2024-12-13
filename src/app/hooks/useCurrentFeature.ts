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
  const handleAutoTypeChange = (currentIndex = 0, nextIndex = 1) => {
    if (!isNaN(timer)) {
      window.clearTimeout(timer);
    }
    const newTimer = window.setTimeout(() => {
      if (nextIndex >= video.length) {
        handleAutoTypeChange();
      } else {
        setCurrentFeature(video[nextIndex].type as VideoType);        
        handleAutoTypeChange(nextIndex, nextIndex + 1);
      }
    }, video[currentIndex].duration);
    setTimer(newTimer);
  };

  const manualChange = (type: VideoType) => {
    if (!isNaN(timer)) {
      window.clearTimeout(timer);
    }
    const index = video.findIndex(v => v.type === type);
    if(index === -1) return;
    setCurrentFeature(video[index].type as VideoType);
    handleAutoTypeChange(index, index + 1);
  };

  useEffect(() => {
    handleAutoTypeChange();
  }, []);

  return { currentFeature, manualChange };

};