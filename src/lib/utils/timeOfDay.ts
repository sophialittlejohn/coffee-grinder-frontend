import { useMemo, useState } from "react";

export type TimesOfDay = "morning" | "afternoon" | "evening";

export const timeOfDay = (currentTime: number): TimesOfDay => {
  if (currentTime >= 12 && currentTime < 17) {
    return "afternoon";
  } else if (currentTime >= 17 || currentTime < 3) {
    return "evening";
  } else {
    return "morning";
  }
};

export const useTimeOfDay = () => {
  const currentTime = new Date().getHours();
  return useMemo(() => timeOfDay(currentTime), [currentTime]);
};
