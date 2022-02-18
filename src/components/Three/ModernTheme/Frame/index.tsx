import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import frameObj from '../../../../assets/model/frame.obj';
import { FRAME_RATIO, PICTURE_RATIO } from '../Constants';

function Frame({ position, rotation, ratio, children }: any) {
  const obj: any = useLoader(OBJLoader, frameObj);
  const frame = obj.clone();

  const [x, y, z] = FRAME_RATIO[ratio];
  const [x1, y2, z3] = PICTURE_RATIO[ratio];

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [x1 + 5, y2 + 4, 3],
    position,
    rotation,
  }));
  return (
    <>
      <mesh ref={ref} />
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
