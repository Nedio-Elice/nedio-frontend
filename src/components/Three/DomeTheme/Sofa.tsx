import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import source from '../../../assets/model/sofa.glb';

function Sofa({ position, rotation, scale }: any) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, 1, 1],
    position,
    rotation,
  }));

  const model = useLoader<any, any>(GLTFLoader, source);

  return (
    <>
      <mesh ref={ref} />
      <primitive
        scale={scale}
        position={position}
        rotation={rotation}
        object={model.scene.clone()}
        dispose={null}
      />
    </>
  );
}

export default Sofa;
