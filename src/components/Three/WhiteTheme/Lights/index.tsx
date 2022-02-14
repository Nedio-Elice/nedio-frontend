import PointLight from '../PointLight';

function Lights() {
  return (
    <>
      <PointLight intensity={0.25} position={[0, 25, -45]} />
      <PointLight intensity={0.25} position={[20, 25, -90]} />
      <PointLight intensity={0.25} position={[-8, 30, -78]} />
    </>
  );
}

export default Lights;
