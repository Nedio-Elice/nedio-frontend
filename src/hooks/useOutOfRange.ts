import { useState, useEffect } from 'react';

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

const useOutOfRange = (
  el: React.RefObject<ValidRefTarget>,
  initState: boolean,
) => {
  const [isActive, setIsActive] = useState<boolean>(initState);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive((prevActive) => !prevActive);
      }
    }

    if (isActive) window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isActive, el]);

  return [isActive, setIsActive] as const;
};

export default useOutOfRange;
