import Wall from './Wall';

function Walls() {
  const rotationY = [0, -Math.PI / 2, 0];

  return (
    <>
      <Wall wallSize={[150, 70, 1]} position={[0, 35, 50]} />
      <Wall wallSize={[150, 70, 1]} position={[0, 35, -50]} />
      <Wall
        wallSize={[100, 70, 1]}
        position={[-75, 35, 0]}
        rotation={rotationY}
      />
      <Wall
        wallSize={[100, 70, 1]}
        position={[75, 35, 0]}
        rotation={rotationY}
      />
      <Wall wallSize={[50, 70, 3]} position={[1.5, 35, -21.5]} />
      <Wall
        wallSize={[70, 70, 3]}
        position={[25, 35, 15]}
        rotation={rotationY}
      />
    </>
  );
}

export default Walls;
