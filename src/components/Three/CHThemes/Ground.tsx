import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

import textureImage from '../../../assets/textures/tile2.jpg';

type Args = [
  width?: number | undefined,
  height?: number | undefined,
  widthSegments?: number | undefined,
  heightSegments?: number | undefined,
];

function Ground(props: any) {
  const groundSize: Args = [150, 100];

  const [ref] = usePlane(() => ({
    args: groundSize,
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    ...props,
  }));

  const texture = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    textureImage,
  );

  const textureSize = 5;

  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.repeat.set(textureSize, textureSize);

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={groundSize} />
      <meshStandardMaterial map={texture} attach="material" roughness={0.4} />
    </mesh>
  );
}

export default Ground;
