import { useLayoutEffect, useState } from 'react';
import { throttle } from '../utils';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const throttleUpdateSize = throttle(updateSize);

    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', throttleUpdateSize);
    updateSize();

    return () => window.removeEventListener('resize', throttleUpdateSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
