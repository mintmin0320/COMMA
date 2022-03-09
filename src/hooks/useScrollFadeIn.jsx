import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0, x = 0, y = 0, opacity = 1) => {
  const element = useRef();

  const handleDirection = (name, x, y) => {
    switch (name) {
      case "up":
        let y_position = y + 2;
        return `translate(${0}em, ${y_position}em)`;
      case "up2":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";

      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        let xdirect = x + 1;
        return `translate(${xdirect}em, ${y}em)`;
      case "opacity":
        return "translate3d(0, 0, 0)";
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "linear";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = `${opacity}`;
        current.style.transform = `translate(${x}em, ${y}em)`;
      }
    },
    [delay, duration, opacity, x, y]
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.3 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction, x, y) },
  };
};

export default useScrollFadeIn;
