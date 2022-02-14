import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useBox, usePlane } from '@react-three/cannon';
import marbelImg from '../../../assets/textures/wood.png';

const SIZE = 5;

function Celling() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [25, 25, 0.5],
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 5, 0],
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
      <planeBufferGeometry attach="geometry" args={[25, 25, 1]} />
      <meshBasicMaterial map={floor} attach="material" />
    </mesh>
  );
}

export default Celling;
