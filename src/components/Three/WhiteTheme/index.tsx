import Scene from '../scene';
import Bench from './Bench';
import Ceiling from './Ceiling';
import Frames from './Frames';
import Ground from './Ground';
import Lights from './Lights';
import Walls from './Walls';

interface Props {
  pickItem: (item: any) => void;
}

function WhiteTheme({ pickItem }: Props) {
  return (
    <Scene>
      {/* default Light */}
      <spotLight castShadow intensity={0.7} position={[20, 250, 0]} />
      <Ceiling />
      <Frames pickItem={pickItem} />
      <Walls />
      <Lights />
      <Bench position={[44, 0, -92]} scale={[8, 8, 8]} />
      <Ground position={[0, 0, -55]} />
    </Scene>
  );
}

export default WhiteTheme;
