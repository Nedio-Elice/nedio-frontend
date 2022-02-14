import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';

import textureImage from '../../../assets/textures/pav3.jpg';

type Args = [
  radiusTop?: number | undefined,
  radiusBottom?: number | undefined,
  height?: number | undefined,
  radialSegments?: number | undefined,
  heightSegments?: number | undefined,
  openEnded?: boolean | undefined,
];

function Cylinder(props: any) {
  const wallSize: Args = [150, 150, 75, 30, 20, true];

  const [ref] = useCylinder(() => ({
    mass: 1,
    type: 'Static',
    args: wallSize,
    position: [0, 37.5, 0],
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

export default Cylinder;
