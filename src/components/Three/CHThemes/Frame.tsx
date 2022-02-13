import * as THREE from 'three';
import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import Light from './Light';

function Frame({ path, frameSize, openModal, ...props }: any) {
  const [ref] = useBox(() => ({
    args: frameSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));

  const handleClick = () => {
    openModal({
      title: 'TITLE',
      description: 'This is...',
      imageUrl: path,
    });
  };

  const [x, y, z] = props.position;

  const texture = useLoader<THREE.Texture, string>(THREE.TextureLoader, path);

  return (
    <>
      <Light position={[0, 100, 0]} target={[x, y - 15, z - 9]} />
      <mesh ref={ref} receiveShadow onClick={handleClick}>
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
