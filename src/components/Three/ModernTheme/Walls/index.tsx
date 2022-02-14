import { useLoader } from '@react-three/fiber';
import { Texture, TextureLoader, MirroredRepeatWrapping } from 'three';
import wallImg from '../../../../assets/textures/ModernThemeTexture/wall.jpeg';
import {
  FAR_FROM_DEFAULT_POSITION,
  WALL_HEIGHT,
  WALL_REPEAT_SIZE,
  WALL_THICKNESS,
  WALL_WIDTH,
} from '../Constants';
import Wall, { CustomWall } from '../Wall';

function Walls() {
  const wall = useLoader<Texture, string>(TextureLoader, wallImg);
  wall.wrapS = MirroredRepeatWrapping;
  wall.wrapT = MirroredRepeatWrapping;
  wall.repeat.set(WALL_REPEAT_SIZE * 2, WALL_REPEAT_SIZE);

  return (
    <>
      {/* 앞쪽 벽 */}
      <CustomWall
        wallMap={wall}
        position={[
          -FAR_FROM_DEFAULT_POSITION + 12,
          WALL_HEIGHT / 2,
          FAR_FROM_DEFAULT_POSITION - 135,
        ]}
        size={[WALL_WIDTH + 35, WALL_HEIGHT, WALL_THICKNESS]}
      />
      {/* 사이 벽 */}
      <CustomWall
        wallMap={wall}
        position={[
          WALL_WIDTH / 2 - 3,
          WALL_HEIGHT / 2,
          FAR_FROM_DEFAULT_POSITION + 5 - 84,
        ]}
        size={[WALL_WIDTH / 2, WALL_HEIGHT, WALL_THICKNESS]}
      />
      <Wall
        wallMap={wall}
        position={[
          -WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -10 - FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      {/* 왼쪽 벽 */}
      <CustomWall
        wallMap={wall}
        position={[
          -WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -3,
        ]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[WALL_WIDTH - 25, WALL_HEIGHT, WALL_THICKNESS]}
      />
      <CustomWall
        wallMap={wall}
        position={[
          -WALL_WIDTH + FAR_FROM_DEFAULT_POSITION - 0.5,
          WALL_HEIGHT / 2,
          -WALL_WIDTH - 2.5,
        ]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[WALL_WIDTH + 24, WALL_HEIGHT, WALL_THICKNESS]}
      />
      {/* 오른쪽 벽 */}
      <Wall
        wallMap={wall}
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -FAR_FROM_DEFAULT_POSITION - 0.5,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Wall
        wallMap={wall}
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -WALL_WIDTH - FAR_FROM_DEFAULT_POSITION,
        ]}
        rotation={[0, Math.PI / 2, 0]}
      />
      {/* 뒷 벽 */}
      <Wall
        wallMap={wall}
        position={[
          FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          FAR_FROM_DEFAULT_POSITION + 5,
        ]}
      />
    </>
  );
}

export default Walls;
