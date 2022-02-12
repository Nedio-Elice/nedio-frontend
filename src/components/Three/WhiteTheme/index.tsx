import Scene from '../scene';
import Bench from './Bench';
import Ceiling from './Ceiling';
import Frames from './Frames';
import Ground from './Ground';
import Lights from './Lights';
import Walls from './Walls';

function WhiteTheme() {
  return (
    <Scene>
      {/* default Light */}
      <spotLight castShadow intensity={0.7} position={[20, 250, 0]} />
      <Ceiling />
      <Frames />
      <Walls />
      <Lights />

      <Bench position={[-10, 0, -70]} scale={[10, 10, 10]} />
      <Ground position={[0, 0, 0]} />
    </Scene>
  );
}

export default WhiteTheme;
