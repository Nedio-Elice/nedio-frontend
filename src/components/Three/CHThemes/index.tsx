import Scene from '../scene';
import Roof from './Roof';
import Cylinder from './Cylinder';
import Boundaries from './Boundaries';
import Walls from './Walls';
import Ground from './Ground';
import Frames from './Frames';

function CHThemes({ pickItem }: any) {
  return (
    <Scene>
      <Roof />
      <Cylinder />
      <Boundaries />
      <Walls />
      <Ground />
      <Frames pickItem={pickItem} />
    </Scene>
  );
}

export default CHThemes;
