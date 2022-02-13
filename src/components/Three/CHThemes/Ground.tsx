import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

import textureImage from '../../../assets/textures/terrazzo.jpg';

type Args = [
  radius?: number | undefined,
  segments?: number | undefined,
  thetaStart?: number | undefined,
  thetaLength?: number | undefined,
];

function Ground(props: any) {
  const groundSize: Args = [150, 30];

  const [ref] = usePlane(() => ({
    args: groundSize,
    rotation: [-Math.PI / 2, 0, 29],
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
      <circleBufferGeometry attach="geometry" args={groundSize} />
      <meshStandardMaterial
        map={texture}
        attach="material"
        roughness={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Ground;
