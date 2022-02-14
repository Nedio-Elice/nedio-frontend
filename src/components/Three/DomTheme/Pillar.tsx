import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';

import textureImage from '../../../assets/textures/terrazzo2.jpg';

type Args = [
  radiusTop?: number | undefined,
  radiusBottom?: number | undefined,
  height?: number | undefined,
  radialSegments?: number | undefined,
  heightSegments?: number | undefined,
  openEnded?: boolean | undefined,
];

function Pillar(props: any) {
  const wallSize: Args = [0, 50, 250, 30, 20, false];

  const [ref] = useCylinder(() => ({
    type: 'Kinematic',
    args: wallSize,
    position: [0, 150, 0],
    ...props,
  }));

  const texture = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    textureImage,
  );

  const textureSize = 15;

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(textureSize, 2);

  return (
    <mesh ref={ref} receiveShadow>
      <cylinderBufferGeometry attach="geometry" args={wallSize} />
      <meshStandardMaterial
        map={texture}
        attach="material"
        roughness={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Pillar;
