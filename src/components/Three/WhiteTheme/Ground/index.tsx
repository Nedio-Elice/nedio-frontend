import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';
import { GROUND_SIZE } from '../Constants';
import mable from '../../../../assets/textures/marble6/Marble006_1K_Color.jpg';

const SIZE = 10;

function Ground(props: any) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  const floor = useLoader<THREE.Texture, string>(THREE.TextureLoader, mable);

  floor.wrapS = THREE.MirroredRepeatWrapping;
  floor.wrapT = THREE.MirroredRepeatWrapping;
  floor.repeat.set(SIZE, SIZE);
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={GROUND_SIZE} />
      <meshPhongMaterial displacementScale={0.2} map={floor} />
    </mesh>
  );
}

export default Ground;
