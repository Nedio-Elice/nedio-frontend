import { Stage } from '@react-three/drei';

function Light() {
  return (
    <>
      <Stage intensity={0.001} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.3} position={[-4, 3.5, -4]} />
      <pointLight castShadow intensity={0.3} position={[4, 3.5, -4]} />
      <pointLight castShadow intensity={0.3} position={[4, 3.5, 4]} />
      <pointLight castShadow intensity={0.3} position={[-4, 3.5, 4]} />
    </>
  );
}

export default Light;
