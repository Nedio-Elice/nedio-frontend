/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sky } from '@react-three/drei';
import Scene from '../Scene';
import Roof from './Roof';
import Cylinder from './Cylinder';
import Boundaries from './Boundaries';
import Walls from './Walls';
import Ground from './Ground';
import Frames from './Frames';
import Player from '../Player';
import Cube from './Cube';
import Sound from './Sound';

import { HallInfo } from '../../../types/GalleryEdit';
import Funitures from './Funitures';

interface Props {
  pickItem: any;
  hall: HallInfo;
}

function DomTheme({ pickItem, hall }: Props) {
  return (
    <>
      <Sky />
      <Player position={[-85, 33, 70]} speed={80} />
      <Scene>
        <pointLight intensity={1} position={[0, 200, 0]} />
        <pointLight intensity={0.7} position={[0, 300, 300]} />
        <pointLight intensity={0.7} position={[50, 300, -300]} />
        <Roof />
        <Cube position={[0, 140, 0]} rotation={[Math.PI / 4, 0, Math.PI / 4]} />
        <Cylinder />
        <Boundaries />
        <Walls />
        <Frames pickItem={pickItem} hall={hall} />
        <Funitures />
        <Ground />
        <Sound />
      </Scene>
    </>
  );
}

export default DomTheme;
