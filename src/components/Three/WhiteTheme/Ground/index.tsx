import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';
import { Texture, TextureLoader, MirroredRepeatWrapping } from 'three';
import { GROUND_SIZE, GROUND_REPEAT_SIZE } from '../Constants';
import mable from '../../../../assets/textures/marble6/Marble006_1K_Roughness.jpg';

function Ground(props: any) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  const ground = useLoader<Texture, string>(TextureLoader, mable);
  ground.wrapS = MirroredRepeatWrapping;
  ground.wrapT = MirroredRepeatWrapping;
  ground.repeat.set(GROUND_REPEAT_SIZE, GROUND_REPEAT_SIZE);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={GROUND_SIZE} />
      <meshPhongMaterial displacementScale={0.2} map={ground} />
    </mesh>
  );
}

export default Ground;
