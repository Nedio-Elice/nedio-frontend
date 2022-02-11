import { Canvas, useLoader } from '@react-three/fiber';
import { Provider, ReactReduxContext } from 'react-redux';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls, Sky } from '@react-three/drei';
import Scene from '../scene';
import Player from '../Player';
import Ground from '../Ground';
import Walls from '../Walls';
import Celling from '../Celling';
import Frame from '../Frame';

// TODO: 자신만의 방
// TODO: click시 작품
// TODO: 적절한 조명
// TODO: 이미지 비율 고려

function Hall() {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas>
          <Provider store={store}>
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.25} />
            <pointLight castShadow intensity={0.5} position={[0, 1, 0]} />
            <Physics gravity={[0, -300, 0]}>
              <Debug color="black" scale={1.1}>
                <Scene>
                  <Ground position={[0, 1, 0]} />
                </Scene>
              </Debug>
              {/* <OrbitControls /> */}
              <Player position={[0, 2, 0]} />
            </Physics>
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default Hall;
