import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import frameObj from '../../../../assets/3D/frame.obj';

function Frame({ position, scale, children }: any) {
  const obj = useLoader(OBJLoader, frameObj);

  return (
    <>
      <primitive object={obj} position={position} scale={scale} />
      {children}
    </>
  );
}

export default Frame;
