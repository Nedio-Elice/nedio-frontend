import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import frameObj from '../../../../assets/3D/frame.obj';
import { FRAME_RATIO } from '../Constants';

function Frame({ position, rotation, ratio, children }: any) {
  const obj: any = useLoader(OBJLoader, frameObj);
  const frame = obj.clone();

  const [x, y, z] = FRAME_RATIO[ratio];
  return (
    <>
      <primitive
        object={frame}
        position={position}
        scale={[x, y, z]}
        rotation={rotation}
      />
      {children}
    </>
  );
}

export default Frame;
