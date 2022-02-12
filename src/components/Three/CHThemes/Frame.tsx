import * as THREE from 'three';
import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import Light from './Light';

function Frame({ path, frameSize, ...props }: any) {
  const [ref] = useBox(() => ({
    args: frameSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));

  const [x, y, z] = props.position;

  const texture = useLoader<THREE.Texture, string>(THREE.TextureLoader, path);

  return (
    <>
      <Light position={[0, 100, 0]} target={[x, y - 15, z - 9]} />
      <mesh ref={ref} receiveShadow>
        <boxBufferGeometry attach="geometry" args={frameSize} />
        <meshPhongMaterial
          map={texture}
          attach="material"
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

export default Frame;
