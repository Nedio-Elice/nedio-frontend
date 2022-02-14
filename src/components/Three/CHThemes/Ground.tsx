import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

import textureImage from '../../../assets/textures/concrete2.jpg';

type Args = [
  radius?: number | undefined,
  segments?: number | undefined,
  thetaStart?: number | undefined,
  thetaLength?: number | undefined,
];

function Ground(props: any) {
  const groundSize: Args = [150, 50];

  const [ref] = usePlane(() => ({
    args: groundSize,
    rotation: [-Math.PI / 2, 0, -Math.PI / 4],
    position: [0, 0, 0],
    ...props,
  }));

  const texture = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    textureImage,
  );

  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh ref={ref} receiveShadow>
      <circleBufferGeometry attach="geometry" args={groundSize} />
      <meshStandardMaterial
        map={texture}
        attach="material"
        roughness={0.1}
        metalness={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Ground;
