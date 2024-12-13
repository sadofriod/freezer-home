'use client'
import React, { useEffect } from "react";
import { ManualChange, useCurrentFeature } from "../hooks/useCurrentFeature";
import { VideoType } from "./AutoPlayVideo";

export const AutoChange: React.FC<{
  onChange: (feature: VideoType) => void;
  setManageChange: (func: ManualChange) => void;
}> = ({onChange, setManageChange}) => {
  const { currentFeature, manualChange } = useCurrentFeature();
  useEffect(() => {
    onChange(currentFeature);
    setManageChange(manualChange);
  }, [currentFeature])
  return <></>
};