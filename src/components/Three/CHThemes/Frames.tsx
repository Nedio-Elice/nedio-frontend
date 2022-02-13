import Frame from './Frame';
import Light from './Light';

import animal from '../../../assets/images/animal.png';
import nature from '../../../assets/images/nature.png';
import person from '../../../assets/images/person.png';

const bottle =
  'https://images.unsplash.com/photo-1644447381354-662bfd7c78f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

function Frames({ openModal }: any) {
  const frameX = [50, 35, 1];
  const frameY = [35, 50, 1];

  return (
    <>
      <Frame
        path={animal}
        frameSize={frameX}
        position={[0, 45, 145]}
        openModal={openModal}
      />
      <Frame
        path={person}
        frameSize={frameY}
        position={[0, 45, -145]}
        openModal={openModal}
      />
      <Frame
        path={person}
        frameSize={frameX}
        position={[145, 45, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-145, 45, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[36, 45, 36]}
        rotation={[0, Math.PI / 4, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[36, 45, -36]}
        rotation={[0, -Math.PI / 4, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-36, 45, -36]}
        rotation={[0, Math.PI / 4, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-36, 45, 36]}
        rotation={[0, -Math.PI / 4, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-89, 37.5, -89]}
        rotation={[0, Math.PI / 4, 0]}
        openModal={openModal}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        wallSize={[75, 75, 3]}
        position={[89, 37.5, 89]}
        rotation={[0, Math.PI / 4, 0]}
        openModal={openModal}
      />
    </>
  );
}

export default Frames;
