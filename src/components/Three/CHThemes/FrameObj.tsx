import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import frameObj from '../../../assets/3D/frame_ch.obj';

function FrameObj({ position, scale }: any) {
  const obj = useLoader(OBJLoader, frameObj);

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [80, 100, 80],
    position,
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

export default FrameObj;
