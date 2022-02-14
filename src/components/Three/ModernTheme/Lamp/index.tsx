import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import lamp from '../../../../assets/model/white_lamp.glb';

function Lamp({ position, scale }: any) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, 1, 1],
    position,
  }));

  const model = useLoader<any, any>(GLTFLoader, lamp);

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

export default Lamp;
