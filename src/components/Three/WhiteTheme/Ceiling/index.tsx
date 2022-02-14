import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { MirroredRepeatWrapping, TextureLoader } from 'three';
import { CEILING_REPEAT_SIZE, GROUND_SIZE, WALL_HEIGHT } from '../Constants';
import wallImg from '../../../../assets/textures/ceiling6/white.jpeg';

function Ceiling() {
  const [ref] = usePlane(() => ({
    args: GROUND_SIZE,
    rotation: [Math.PI / 2, 0, 0],
    position: [0, WALL_HEIGHT, 0],
  }));

  const ceiling = useLoader<THREE.Texture, string>(TextureLoader, wallImg);

  ceiling.wrapS = MirroredRepeatWrapping;
  ceiling.wrapT = MirroredRepeatWrapping;
  ceiling.repeat.set(CEILING_REPEAT_SIZE, CEILING_REPEAT_SIZE);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={GROUND_SIZE} />
      <meshStandardMaterial displacementScale={0.1} map={ceiling} />
    </mesh>
  );
}

export default Ceiling;
