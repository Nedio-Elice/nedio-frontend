import styled from 'styled-components';

import { Provider, ReactReduxContext } from 'react-redux';

import { OrbitControls, Sky } from '@react-three/drei';
import { Debug, Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';

import CHThemes from '../CHThemes';
import Player from '../Player';

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
        <Container>
          <Canvas>
            <Provider store={store}>
              <Sky sunPosition={[100, 20, 100]} />
              <ambientLight intensity={0.8} />
              <Physics gravity={[0, 0, 0]}>
                {/* <Debug color="black" scale={1.1}> */}
                <CHThemes pickItem={pickItem} />
                {/* </Debug> */}
                {/* <OrbitControls /> */}
                <Player position={[50, 25, 50]} />
              </Physics>
            </Provider>
          </Canvas>
        </Container>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default Hall;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
