import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

import textureImage from '../../../assets/textures/DomeThemeTexture/roof.jpg';

type Args = [
  radius?: number | undefined,
  widthSegments?: number | undefined,
  heightSegments?: number | undefined,
  phiStart?: number | undefined,
  phiLength?: number | undefined,
  thetaStart?: number | undefined,
  thetaLength?: number | undefined,
];

function Roof(props: any) {
  const roofSize: Args = [155, 30, 15, 2, 6.3, 0.2, 1.2];

  const [ref] = useSphere(() => ({
    args: roofSize,
    position: [0, 37.5, 0],
    ...props,
  }));

  const texture = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    textureImage,
  );

  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.repeat.set(3, 1);

  return (
    <mesh ref={ref} receiveShadow>
      <sphereGeometry attach="geometry" args={roofSize} />
      <meshStandardMaterial
        map={texture}
        attach="material"
        roughness={0.4}
        side={THREE.DoubleSide}
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

export default Roof;
