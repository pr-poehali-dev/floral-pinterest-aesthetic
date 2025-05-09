
import { useEffect, useState, RefObject } from "react";

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // Если элемент пересекся и нужно сработать только раз - отключаем наблюдение
        if (entry.isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isIntersecting;
};

export default useIntersectionObserver;
