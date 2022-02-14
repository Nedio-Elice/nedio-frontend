import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import chandelier from '../../../../assets/model/chandelier.glb';

function Chandelier({ position, scale }: any) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [2, 2, 2],
    position,
  }));

  const model = useLoader<any, any>(GLTFLoader, chandelier);

  return (
    <>
      <mesh ref={ref} />
      <primitive
        scale={scale}
        position={position}
        object={model.scene.clone()}
        dispose={null}
      />
    </>
  );
}

export default Chandelier;
