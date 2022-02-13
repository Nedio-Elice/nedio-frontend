import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import piano from '../../../../assets/model/piano.glb';

function Piano({ position, scale }: any) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [3, 5, 3],
    position,
  }));

  const model = useLoader<any, any>(GLTFLoader, piano);

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

export default Piano;
