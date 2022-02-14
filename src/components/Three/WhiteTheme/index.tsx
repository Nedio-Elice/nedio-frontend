import Scene from '../scene';
import Bench from './Bench';
import Ceiling from './Ceiling';
import Frames from './Frames';
import Ground from './Ground';
import Lamp from './Lamp';
import Lights from './Lights';
import Walls from './Walls';

interface Props {
  pickItem: (item: any) => void;
}

function WhiteTheme({ pickItem }: Props) {
  return (
    <Scene>
      <Ceiling />
      <Frames pickItem={pickItem} />
      <Walls />
      <Lights />
      <Lamp position={[-5, -26, -90]} scale={[15, 15, 15]} />
      <Bench position={[44, 0, -92]} scale={[8, 8, 8]} />
      <Ground position={[0, 0, -55]} />
    </Scene>
  );
}

export default WhiteTheme;
