import { useBox } from '@react-three/cannon';
import { WALL_SIZE } from '../Constants';

function Wall({ wallMap, position, rotation }: any) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: WALL_SIZE,
    position,
    rotation,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry attach="geometry" args={WALL_SIZE} />
      <meshPhongMaterial map={wallMap} attach="material" />
    </mesh>
  );
}

export default Wall;
