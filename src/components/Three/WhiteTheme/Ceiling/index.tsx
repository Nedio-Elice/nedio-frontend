import * as THREE from 'three';
import { usePlane } from '@react-three/cannon';
import { useTexture } from '@react-three/drei';
import wallImg from '../../../../assets/textures/ceiling6/white.jpeg';
import { GROUND_SIZE, WALL_HEIGHT } from '../Constants';

const SIZE = 25;

function Ceiling() {
  const [ref] = usePlane(() => ({
    args: GROUND_SIZE,
    rotation: [Math.PI / 2, 0, 0],
    position: [0, WALL_HEIGHT, 0],
  }));
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([wallImg]);

  colorMap.wrapS = THREE.MirroredRepeatWrapping;
  colorMap.wrapT = THREE.MirroredRepeatWrapping;
  colorMap.repeat.set(SIZE, SIZE);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={GROUND_SIZE} />
      <meshStandardMaterial
        displacementScale={0.1}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

export default Ceiling;
