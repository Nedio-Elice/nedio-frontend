import Ceiling from './Ceiling';
import Ground from './Ground';
import Frames from './Frames';
import Walls from './Walls';
import Player from '../Player';
import Models from './Models';
import Light from './Light';
import Scene from '../Scene';
import Sound from './Sound';

interface Props {
  pickItem: (item: any) => void;
  hall: any;
}

function JazzTheme({ pickItem, hall }: Props) {
  return (
    <>
      <Player position={[0, 3, -2]} speed={7} />
      <Scene>
        <Light />
        <Models />
        <Walls />
        <Ceiling />
        {hall && <Frames data={hall.imagesData} pickItem={pickItem} />}
        <Ground position={[0, 1, 0]} wireframe={false} />
        <Sound />
      </Scene>
    </>
  );
}

export default JazzTheme;
