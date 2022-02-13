import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import benchObj from '../../../../assets/3D/bench.obj';

function Bench({ position, scale }: any) {
  const obj = useLoader(OBJLoader, benchObj);

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [17, 8, 15],
    position: [-10, 6, -70],
  }));

  return (
    <>
      <mesh ref={ref} />
      <primitive
        scale={scale}
        position={position}
        object={obj}
        dispose={null}
      />
    </>
  );
}

export default Bench;
