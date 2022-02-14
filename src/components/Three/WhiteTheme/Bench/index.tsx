import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import benchObj from '../../../../assets/3D/bench.obj';

function Bench({ position, scale }: any) {
  const obj = useLoader(OBJLoader, benchObj);
  const [x, y, z] = position;
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [15, 8, 8],
    position: [x, y + 8, z],
    rotation: [0, -Math.PI / 2, 0],
  }));

  return (
    <>
      <mesh ref={ref} />
      <primitive
        scale={scale}
        position={position}
        object={obj}
        dispose={null}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </>
  );
}

export default Bench;
