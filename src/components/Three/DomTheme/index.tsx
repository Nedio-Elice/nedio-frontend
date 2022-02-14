import Scene from '../Scene';
import Roof from './Roof';
import Cylinder from './Cylinder';
import Boundaries from './Boundaries';
import Walls from './Walls';
import Ground from './Ground';
import Frames from './Frames';
import Player from '../Player';

function DomTheme({ pickItem }: any) {
  return (
    <Scene>
      <ambientLight intensity={0.8} />
      <Player position={[50, 25, 50]} speed={60} />
      <Roof />
      <Cylinder />
      <Boundaries />
      <Walls />
      <Ground />
      <Frames pickItem={pickItem} />
    </Scene>
  );
}

export default DomTheme;
