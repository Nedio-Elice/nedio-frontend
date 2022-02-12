import Scene from '../scene';
import Ceiling from './Ceiling';
import Frames from './Frames';
import Ground from './Ground';
import Walls from './Walls';

function WhiteTheme() {
  return (
    <Scene>
      {/* default Light */}
      <spotLight castShadow intensity={0.5} position={[20, 150, 10]} />
      <Ceiling />
      <Frames />
      <Walls />
      <Ground position={[0, 0, 0]} />
    </Scene>
  );
}

export default WhiteTheme;
