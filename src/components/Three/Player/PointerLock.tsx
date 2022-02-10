import React, { useRef, useEffect } from 'react';
import { PointerLockControls } from '@react-three/drei';
import { useAppDispatch } from '../../../store/hooks';
import { setControls } from '../../../store/controls';

function PointerLock() {
  const controlRef = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!controlRef.current) return;
    dispatch(setControls(controlRef.current));
  }, [controlRef, dispatch]);

  return <PointerLockControls ref={controlRef} />;
}

export default PointerLock;
