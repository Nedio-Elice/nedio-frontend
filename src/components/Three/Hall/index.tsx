/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { Provider, ReactReduxContext } from 'react-redux';
import { Debug, Physics } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import DomeTheme from '../DomeTheme';
import ModernTheme from '../ModernTheme';
import JazzTheme from '../JazzTheme';

interface Props {
  pickItem: (item: any) => void;
  hall: any;
}

function Hall({ pickItem, hall }: Props) {
  const hallTheme = hall.hallTheme ? hall.hallTheme : 'Modern';

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Container>
          <Canvas>
            <Provider store={store}>
              <Physics gravity={[0, 0, 0]}>
                {/* <Debug color="black" scale={1.1}> */}
                {hallTheme === 'Modern' ? (
                  <ModernTheme pickItem={pickItem} hall={hall} />
                ) : hallTheme === 'Jazz' ? (
                  <JazzTheme pickItem={pickItem} hall={hall} />
                ) : (
                  <DomeTheme pickItem={pickItem} hall={hall} />
                )}
                {/* </Debug>
                {/* <OrbitControls /> */}
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
