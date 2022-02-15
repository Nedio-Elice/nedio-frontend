import Wall from './Wall';

import whiteWall from '../../../assets/textures/DomeThemeTexture/whiteWall.jpg';
import blackWall from '../../../assets/textures/DomeThemeTexture/blackWall.jpg';

function Walls() {
  return (
    <>
      <Wall
        wallSize={[100, 75, 100]}
        position={[0, 37.5, 0]}
        rotation={[0, Math.PI / 4, 0]}
        textureImage={whiteWall}
      />
      <Wall
        wallSize={[75, 75, 3]}
        position={[-90, 37.5, -90]}
        rotation={[0, Math.PI / 4, 0]}
        textureImage={blackWall}
      />
      <Wall
        wallSize={[75, 75, 3]}
        position={[90, 37.5, 90]}
        rotation={[0, Math.PI / 4, 0]}
        textureImage={blackWall}
      />
    </>
  );
}

export default Walls;
