import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';
import marbelImg from '../../../assets/textures/marble.jpeg';

const SIZE = 25;

function Ground(props: any) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  const floor = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    marbelImg,
  );
  floor.wrapS = THREE.MirroredRepeatWrapping;
  floor.wrapT = THREE.MirroredRepeatWrapping;
  floor.repeat.set(SIZE, SIZE);
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial map={floor} attach="material" />
    </mesh>
  );
}

export default Ground;
