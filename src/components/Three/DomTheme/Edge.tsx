import * as THREE from 'three';
import { useBox } from '@react-three/cannon';

function Edge({ path, edgeSize, ...props }: any) {
  const [ref] = useBox(() => ({
    args: edgeSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry attach="geometry" args={edgeSize} />
      <meshPhongMaterial attach="material" side={THREE.DoubleSide} />
    </mesh>
  );
}

export default Edge;
