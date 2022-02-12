import Scene from '../scene';
import Roof from './Roof';
import Frames from './Frames';
import Walls from './Walls';
import Ground from './Ground';

function CHThemes() {
  return (
    <Scene>
      <Roof />
      <Frames />
      <Walls />
      <Ground />
    </Scene>
  );
}

export default CHThemes;
