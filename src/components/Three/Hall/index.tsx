import { Canvas } from '@react-three/fiber';
import { Provider, ReactReduxContext } from 'react-redux';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls, Sky } from '@react-three/drei';
import Player from '../Player';
import Ground from '../Ground';
import Walls from '../Walls';
import Celling from '../Celling';
import Frame from '../Frame';
import HallJazz from '../HallJazz';
import WhiteTheme from '../WhiteTheme';

// TODO: 자신만의 방
// TODO: click시 작품
// TODO: 적절한 조명
// TODO: 이미지 비율 고려
interface Props {
  pickItem: (item: any) => void;
}

function Hall({ pickItem }: Props) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas>
          <Provider store={store}>
            {/* <Sky sunPosition={[100, 20, 100]} /> */}
            <ambientLight intensity={0.1} />
            {/* <spotLight castShadow intensity={0.5} position={[10, 250, 0]} /> */}
            <Physics gravity={[0, 0, 0]}>
              <WhiteTheme pickItem={pickItem} />
              {/* <Debug color="black" scale={1}>
                <WhiteTheme />
              </Debug> */}
              {/* <OrbitControls /> */}
              <Player position={[0, 10, 0]} />
            </Physics>
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default Hall;
