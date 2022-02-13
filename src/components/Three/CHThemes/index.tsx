import Scene from '../scene';
import Roof from './Roof';
import Frames from './Frames';
import Walls from './Walls';
import Ground from './Ground';

function CHThemes({ openModal }: any) {
  return (
    <Scene>
      <Roof />
      <Frames openModal={openModal} />
      <Walls />
      <Ground />
    </Scene>
  );
}

export default CHThemes;
