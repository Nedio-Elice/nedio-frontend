import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { useAppSelector } from '../../../store/hooks';
import PointerLock from './PointerLock';
import { useKeyboardControls } from './useKeyboardControls';

const SPEED = 30;

function Player(props: any) {
  const { camera } = useThree();
  const velocity = useRef([0, 0, 0]);
  const controlRef = useAppSelector((state) => state.controls.movement);
  const { moveForward, moveBackward, moveLeft, moveRight, jump } =
    useKeyboardControls();

  const [ref, api] = useSphere(() => ({
    mass: 5,
    type: 'Dynamic',
    ...props,
  }));

  useEffect(() => {
    api.velocity.subscribe((v) => {
      velocity.current = v;
    });
  }, [api.velocity]);

  useFrame(() => {
    if (!ref.current) return;
    camera.position.copy(ref.current.position);

    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0,
    );
    // length 1로 변환 normalize
    if (controlRef?.isLocked) {
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);
    }
    api.velocity.set(direction.x, 0, direction.z);

    // 없으면 이동이 안됨
    ref.current.getWorldPosition(ref.current.position);
  });

  return (
    <>
      <PointerLock />
      <mesh ref={ref} />
    </>
  );
}

export default Player;
