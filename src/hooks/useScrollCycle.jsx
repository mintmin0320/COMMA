import { useRef, useEffect, useCallback } from "react";

const useScrollCycle = (duration = 1, delay = 0) => {
  const element = useRef();

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "linear";
        current.style.transitionDelay = `${delay}s`;
        current.style.transform = "rotate(180deg)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.8 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: "rotate(0deg)" },
  };
};

export default useScrollCycle;
