import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import wallImg from '../../../../assets/textures/White_Wall.jpeg';
import {
  FAR_FROM_DEFAULT_POSITION,
  WALL_HEIGHT,
  WALL_SIZE,
  WALL_THICKNESS,
  WALL_WIDTH,
} from '../Constants';

const SIZE = 5;

interface Props {
  wallMap: THREE.Texture;
  position: [number, number, number];
}

function FrontWall({ wallMap, position }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: WALL_SIZE,
    position,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry attach="geometry" args={WALL_SIZE} />
      <meshPhongMaterial map={wallMap} attach="material" />
    </mesh>
  );
}

function LeftWall({ wallMap, position }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: WALL_SIZE,
    rotation: [0, -Math.PI / 2, 0],
    position,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry attach="geometry" args={WALL_SIZE} />
      <meshPhongMaterial map={wallMap} attach="material" />
    </mesh>
  );
}

function BackWall({ wallMap, position }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    position,
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry
        attach="geometry"
        args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]}
      />
      <meshPhongMaterial map={wallMap} attach="material" />
    </mesh>
  );
}

function RightWall({ wallMap, position }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: WALL_SIZE,
    rotation: [0, Math.PI / 2, 0],
    position,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry attach="geometry" args={WALL_SIZE} />
      <meshPhongMaterial map={wallMap} attach="material" />
    </mesh>
  );
}

function IntervalWall({ wallMap, position }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: WALL_SIZE,
    position,
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" args={WALL_SIZE} />
      <meshPhongMaterial map={wallMap} attach="material" />
    </mesh>
  );
}

function Walls() {
  const texture = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    wallImg,
  );

  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  texture.repeat.set(SIZE * 2, SIZE);

  return (
    <>
      <FrontWall
        wallMap={texture}
        position={[
          0 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -105 - FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <IntervalWall
        wallMap={texture}
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -50 - FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <IntervalWall
        wallMap={texture}
        position={[
          -WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -10 - FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <LeftWall
        wallMap={texture}
        position={[
          -WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <LeftWall
        wallMap={texture}
        position={[
          -WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -WALL_WIDTH - FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <RightWall
        wallMap={texture}
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <RightWall
        wallMap={texture}
        position={[
          WALL_WIDTH / 2 + FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          -WALL_WIDTH - FAR_FROM_DEFAULT_POSITION,
        ]}
      />
      <BackWall
        wallMap={texture}
        position={[
          FAR_FROM_DEFAULT_POSITION,
          WALL_HEIGHT / 2,
          FAR_FROM_DEFAULT_POSITION / 2 + 10,
        ]}
      />
    </>
  );
}

export default Walls;
