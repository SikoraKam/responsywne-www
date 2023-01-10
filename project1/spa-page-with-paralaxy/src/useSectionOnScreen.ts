import { RefObject, useEffect, useRef, useState } from "react";

export const useSectionOnScreen = (
  options: any,
  ref: RefObject<HTMLDivElement>,
  sectionOnScreenCallBack: () => void
) => {
  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      sectionOnScreenCallBack();
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
