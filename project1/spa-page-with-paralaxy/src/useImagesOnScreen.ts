import { RefObject, useEffect } from "react";

export const useImagesOnScreen = (
  options: any,
  ref: RefObject<HTMLDivElement>
) => {
  const callbackFunction = (entries: any) => {
    const [entry] = entries;

    [...entry.target.children].forEach((img) => {
      const src = img.getAttribute("data-src");
      if (entry.isIntersecting) {
        img.setAttribute("src", src);
      } else {
        img.setAttribute("src", "placeholder.png");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
};
