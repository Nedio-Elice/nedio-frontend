import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import frameObj from '../../../../assets/3D/frame.obj';

function Frame({ position, scale, rotation, children }: any) {
  const obj: any = useLoader(OBJLoader, frameObj);
  const objClone = obj.clone();

  return (
    <>
      <primitive
        object={objClone}
        position={position}
        scale={scale}
        rotation={rotation}
      />
      {children}
    </>
  );
}

export default Frame;
