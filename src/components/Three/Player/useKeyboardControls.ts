import { useState, useEffect } from 'react';

export type DirectionKeys =
  | 'moveForward'
  | 'moveBackward'
  | 'moveLeft'
  | 'moveRight'
  | 'jump';

export type Direction = {
  [key in DirectionKeys]: boolean;
};

export type KeyboardKeys = 'KeyW' | 'KeyS' | 'KeyA' | 'KeyD' | 'Space';
export interface Keyboard {
  readonly KeyW: 'moveForward';
  readonly KeyS: 'moveBackward';
  readonly KeyA: 'moveLeft';
  readonly KeyD: 'moveRight';
  readonly Space: 'jump';
}

function actionByKey(key: KeyboardKeys) {
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
  };
  return keys[key];
}

export const useKeyboardControls = () => {
  const [movement, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.code as KeyboardKeys;

      if (actionByKey(key)) {
        setMovement((state) => ({
          ...state,
          [actionByKey(key)]: true,
        }));
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.code as KeyboardKeys;

      if (actionByKey(key)) {
        setMovement((state) => ({
          ...state,
          [actionByKey(key)]: false,
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
