'use client'
import React, { createContext, PropsWithChildren, useEffect } from "react";
import { VideoType } from "./AutoPlayVideo";
import { useCurrentFeature } from "../../lib/hooks/useCurrentFeature";

type FeaturesContextType = {
  currentFeature: VideoType;
  setIsEnd: (end: boolean) => void;
};

export const FeatureContext = createContext<FeaturesContextType>({
  currentFeature: 'ticket',
  setIsEnd: () => { console.log('setIsEnd not implemented') },
});

const FeaturesContext: React.FC<PropsWithChildren> = (props) => {
  const { currentFeature, manualChange, setIsEnd } = useCurrentFeature();

  const handleClassChange = (e: Event) => {
    const target = e.target as HTMLElement;
    const feature = target.id as VideoType;
    manualChange(feature);
  }

  useEffect(() => {
    document.querySelectorAll('.page-tag').forEach((feature) => {
      feature.classList.remove('page-tag-active');
    });
    document.getElementById(currentFeature)?.classList.add('page-tag-active');
  }, [currentFeature]);

  useEffect(() => {
    document.querySelectorAll('.page-tag').forEach((feature) => {
      feature.addEventListener('click', handleClassChange);
    });
    () => { // eslint-disable-line  @typescript-eslint/no-unused-expressions
      document.querySelectorAll('.page-tag').forEach((feature) => {
        feature.removeEventListener('click', handleClassChange);
      });
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FeatureContext.Provider value={{ currentFeature, setIsEnd }}>
      {props.children}
    </FeatureContext.Provider>
  )
}
export default FeaturesContext;