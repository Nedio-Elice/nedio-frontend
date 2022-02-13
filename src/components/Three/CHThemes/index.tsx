import Scene from '../scene';
import Frames from './Frames';
import Ground from './Ground';
import Cylinder from './Cylinder';
import Roof from './Roof';
import Boundaries from './Boundaries';
import Walls from './Walls';
import Pillar from './Pillar';

function CHThemes({ openModal }: any) {
  return (
    <Scene>
      <Roof />
      <Cylinder />
      <Boundaries />
      {/* <Pillar /> */}
      <Walls />
      <Ground />
      <Frames openModal={openModal} />
    </Scene>
  );
}

export default CHThemes;
