import { useRef, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { Provider, ReactReduxContext } from 'react-redux';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls, Sky } from '@react-three/drei';
import styled from 'styled-components';
import Player from '../Player';
import CHThemes from '../CHThemes';
import MouseIcon from '../CHThemes/MouseIcon';

// TODO: 자신만의 방
// TODO: click시 작품
// TODO: 적절한 조명
// TODO: 이미지 비율 고려

function Hall({ openModal }: any) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Container>
          <Canvas>
            <Provider store={store}>
              <Sky sunPosition={[100, 20, 100]} />
              <ambientLight intensity={0.5} />
              <Physics gravity={[0, 0, 0]}>
                <Debug color="black" scale={1.1}>
                  <CHThemes openModal={openModal} />
                </Debug>
                <OrbitControls />
                {/* <Player position={[0, 25, 0]} /> */}
              </Physics>
            </Provider>
          </Canvas>
          <MouseContainer>
            <MouseIcon />
          </MouseContainer>
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

const MouseContainer = styled.div``;
