import Frame from './Frame';
import Light from './Light';

import animal from '../../../assets/images/animal.png';
import nature from '../../../assets/images/nature.png';
import person from '../../../assets/images/person.png';

const bottle =
  'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

function Frames({ openModal }: any) {
  const frameX = [20, 15, 1];
  const frameY = [15, 20, 1];

  return (
    <>
      <Frame
        path={animal}
        frameSize={frameX}
        position={[0, 35, 49]}
        openModal={openModal}
      />
      <Frame
        path={person}
        frameSize={frameY}
        position={[-45, 35, -49]}
        openModal={openModal}
      />
      <Frame
        path={bottle}
        frameSize={frameX}
        position={[0, 35, -49]}
        openModal={openModal}
      />
      <Frame
        path={nature}
        frameSize={frameY}
        position={[45, 35, -49]}
        openModal={openModal}
      />
    </>
  );
}

export default Frames;
