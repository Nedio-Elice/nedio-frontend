import { Triplet, useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';

function Cube({ position, ...props }: any) {
  const boxSize: Triplet = [50, 50, 50];

  const [ref, api] = useBox(() => ({
    args: boxSize,
    mass: 0,
    type: 'Kinematic',
    position,
    ...props,
  }));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    api.rotation.set(Math.sin(t * 1), Math.cos(t * 1), 0);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxBufferGeometry args={boxSize} />
      <meshStandardMaterial color="grey" metalness={8} roughness={0.3} />
    </mesh>
  );
}

export default Cube;
