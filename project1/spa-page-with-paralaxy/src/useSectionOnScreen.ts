import { RefObject, useEffect, useRef, useState } from "react";

export const useSectionOnScreen = (
  options: any,
  ref: RefObject<HTMLDivElement>,
  setActiveTab: () => void
) => {
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setActiveTab();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
};
