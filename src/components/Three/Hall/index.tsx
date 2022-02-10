import { Canvas } from '@react-three/fiber';
import { Provider, ReactReduxContext } from 'react-redux';
import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import Scene from '../scene';
import Player from '../Player';
import Ground from '../Ground';
import Walls from '../Walls';

function Hall() {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas>
          <Provider store={store}>
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.25} />
            <pointLight castShadow intensity={0.5} position={[100, 100, 100]} />
            <Physics gravity={[0, -30, 0]}>
              <Scene>
                <Walls />
                <Ground position={[0, 0, 0]} />
              </Scene>
              <Player position={[0, 0, 10]} />
            </Physics>
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default Hall;
