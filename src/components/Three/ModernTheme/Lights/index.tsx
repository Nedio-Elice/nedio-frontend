import Pointlight from '../Pointlight';

function Lights() {
  return (
    <>
      <Pointlight intensity={0.25} position={[0, 25, -10]} />
      <Pointlight intensity={0.25} position={[0, 25, -45]} />
      <Pointlight intensity={0.25} position={[20, 25, -90]} />
      <Pointlight intensity={0.25} position={[-8, 30, -78]} />
    </>
  );
}

export default Lights;
