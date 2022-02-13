import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import frameObj from '../../../../assets/3D/frame.obj';

function Frame({ position, rotation, children }: any) {
  const obj: any = useLoader(OBJLoader, frameObj);
  const frame = obj.clone();

  // TODO: ratio 관련 scale 조절

  return (
    <>
      <primitive
        object={frame}
        position={position}
        scale={[25, 25, 50]}
        rotation={rotation}
      />
      {children}
    </>
  );
}

export default Frame;
