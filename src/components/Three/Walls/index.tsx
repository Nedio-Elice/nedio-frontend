import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import wallImg from '../../../assets/textures/White_Wall.jpeg';

const WALL_WIDTH = 40;
const WALL_HEIGHT = 20;
const WALL_HALF_INTERVAL = 40;
const WALL_THICKNESS = 2;

interface Props {
  wallMap: THREE.Texture;
}

function FrontWall({ wallMap }: Props) {
  return (
    <mesh position={[0, 0, -WALL_WIDTH / 2]} rotation={[0, Math.PI / 2, 0]}>
      <boxGeometry args={[WALL_THICKNESS, WALL_HEIGHT, WALL_HALF_INTERVAL]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function BackWall({ wallMap }: Props) {
  return (
    <mesh position={[0, 0, WALL_WIDTH / 2]} rotation={[0, Math.PI / 2, 0]}>
      <boxGeometry args={[WALL_THICKNESS, WALL_HEIGHT, WALL_HALF_INTERVAL]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function LeftWall({ wallMap }: Props) {
  return (
    <mesh position={[-WALL_HALF_INTERVAL / 2, 0, 0]}>
      <boxGeometry args={[WALL_THICKNESS, WALL_HEIGHT, WALL_WIDTH]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function RightWall({ wallMap }: Props) {
  return (
    <mesh position={[WALL_HALF_INTERVAL / 2, 0, 0]}>
      <boxGeometry args={[WALL_THICKNESS, WALL_HEIGHT, WALL_WIDTH]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function Walls() {
  const wallMap = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    wallImg,
  );
  wallMap.wrapS = THREE.MirroredRepeatWrapping;
  wallMap.wrapT = THREE.MirroredRepeatWrapping;
  wallMap.repeat.set(5, 5);

  return (
    <>
      <FrontWall wallMap={wallMap} />
      <LeftWall wallMap={wallMap} />
      <RightWall wallMap={wallMap} />
      <BackWall wallMap={wallMap} />
    </>
  );
}

export default Walls;
