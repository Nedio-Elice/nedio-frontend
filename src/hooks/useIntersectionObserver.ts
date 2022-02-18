/* eslint-disable consistent-return */
import { useEffect } from 'react';

function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 1.0,
}: any) {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      threshold,
    });

    if (!target) return;

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, onIntersect, threshold]);
}

export default useIntersectionObserver;
