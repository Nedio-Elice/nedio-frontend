import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

import textureImage from '../../../assets/textures/solar.jpg';

type Args = [
  width?: number | undefined,
  height?: number | undefined,
  widthSegments?: number | undefined,
  heightSegments?: number | undefined,
];

function Roof(props: any) {
  const roofSize: Args = [150, 100];

  const [ref] = usePlane(() => ({
    args: roofSize,
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 70, 0],
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
      <planeBufferGeometry attach="geometry" args={roofSize} />
      <meshBasicMaterial
        map={texture}
        attach="material"
        side={THREE.DoubleSide}
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

export default Roof;
