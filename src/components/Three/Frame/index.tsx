import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Frame() {
  const obj = useLoader(OBJLoader, '/assets/frame.obj');

  return <primitive object={obj} position={[0, 3, -9]} scale={[5, 5, 1]} />;
}

export default Frame;
