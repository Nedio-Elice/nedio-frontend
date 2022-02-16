import Boundary from './Boundary';

function Boundaries() {
  return (
    <>
      <Boundary
        wallSize={[230, 10, 1]}
        position={[130, 35, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Boundary
        wallSize={[230, 10, 1]}
        position={[-130, 35, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Boundary wallSize={[230, 10, 1]} position={[0, 35, 130]} />
      <Boundary wallSize={[230, 10, 1]} position={[0, 35, -130]} />
      <Boundary
        wallSize={[150, 10, 1]}
        position={[-95, 35, 95]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <Boundary
        wallSize={[150, 10, 1]}
        position={[95, 35, 95]}
        rotation={[0, Math.PI / 4, 0]}
      />
      <Boundary
        wallSize={[150, 10, 1]}
        position={[95, 35, -95]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <Boundary
        wallSize={[150, 10, 1]}
        position={[-95, 35, -95]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </>
  );
}

export default Boundaries;
