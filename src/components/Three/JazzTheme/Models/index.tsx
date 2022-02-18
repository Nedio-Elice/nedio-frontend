import Chandelier from '../Chandelier';
import Lamp from '../Lamp';
import Piano from '../Piano';

function Models() {
  return (
    <>
      <Chandelier position={[-3, -1.5, -3]} scale={2.5} />
      <Chandelier position={[-3, -1.5, 3]} scale={2.5} />
      <Chandelier position={[3, -1.5, -3]} scale={2.5} />
      <Chandelier position={[3, -1.5, 3]} scale={2.5} />
      <Lamp position={[6.5, 1, 6.5]} scale={4} />
      <Piano position={[0, 1, 0]} scale={1.8} />
    </>
  );
}

export default Models;
