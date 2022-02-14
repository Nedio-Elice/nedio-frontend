import { useState, useEffect } from 'react';

function usePointerLock() {
  const [isPointerLock, setIsPointerLock] = useState(false);

  useEffect(() => {
    const onPointerlockchange = () => {
      setIsPointerLock(!!document.pointerLockElement);
    };

    document.addEventListener('pointerlockchange', onPointerlockchange);
    return () => {
      document.addEventListener('pointerlockchange', onPointerlockchange);
    };
  }, []);

  return isPointerLock;
}

export default usePointerLock;
