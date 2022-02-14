import Frame from './Frame';

import animal from '../../../assets/images/animal.png';
import person from '../../../assets/images/person.png';

// 사진 받아와서 뿌려주기
// imageTitle, imageDescription, imageUrl + (position, rotation, customLight, pickItem)

function Frames({ pickItem }: any) {
  const frameX = [50, 35, 2];
  const frameY = [35, 50, 2];

  return (
    <>
      <Frame
        path={animal}
        frameSize={frameX}
        position={[0, 45, 146]}
        pickItem={pickItem}
      />
      <Frame
        path={person}
        frameSize={frameY}
        position={[0, 45, -146]}
        pickItem={pickItem}
      />
      <Frame
        path={person}
        frameSize={frameX}
        position={[146, 45, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-146, 45, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[36, 45, 36]}
        rotation={[0, Math.PI / 4, 0]}
        pickItem={pickItem}
        customLight={[80, 200, 80]}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[36, 45, -36]}
        rotation={[0, -Math.PI / 4, 0]}
        pickItem={pickItem}
        customLight={[80, 200, -80]}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-36, 45, -36]}
        rotation={[0, Math.PI / 4, 0]}
        pickItem={pickItem}
        customLight={[-80, 200, -80]}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-36, 45, 36]}
        rotation={[0, -Math.PI / 4, 0]}
        pickItem={pickItem}
        customLight={[-80, 200, 80]}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        position={[-89, 37.5, -89]}
        rotation={[0, Math.PI / 4, 0]}
        pickItem={pickItem}
      />
      <Frame
        path={animal}
        frameSize={frameY}
        wallSize={[75, 75, 3]}
        position={[89, 37.5, 89]}
        rotation={[0, Math.PI / 4, 0]}
        pickItem={pickItem}
      />
    </>
  );
}

export default Frames;
