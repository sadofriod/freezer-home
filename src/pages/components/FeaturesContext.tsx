'use client'
import React, { createContext, PropsWithChildren, useEffect } from "react";
import { VideoType } from "./AutoPlayVideo";
import { useCurrentFeature } from "../hooks/useCurrentFeature";

type FeaturesContextType = {
  currentFeature: VideoType;
};

export const FeatureContext = createContext<FeaturesContextType>({
  currentFeature: 'ticket'
});

export const FeaturesContext: React.FC<PropsWithChildren> = (props) => {
  const { currentFeature, manualChange } = useCurrentFeature();
  
  const handleClassChange = (e: Event) => {
    const target = e.target as HTMLElement;
    const feature = target.id as VideoType;
    manualChange(feature);
  }

  useEffect(() => {
    manualChange(currentFeature)
    document.querySelectorAll('.page-tag').forEach((feature) => {
      feature.classList.remove('page-tag-active');
    });
    document.getElementById(currentFeature)?.classList.add('page-tag-active');
  }, [currentFeature])
  
  useEffect(() => {
    document.querySelectorAll('.page-tag').forEach((feature) => {
      feature.addEventListener('click', handleClassChange);
    });
    () => {
      document.querySelectorAll('.page-tag').forEach((feature) => {
        feature.removeEventListener('click', handleClassChange);
      });
    }
  }, [])

  return (
    <FeatureContext.Provider value={{ currentFeature: currentFeature }}>
      {props.children}
    </FeatureContext.Provider>
  )
}