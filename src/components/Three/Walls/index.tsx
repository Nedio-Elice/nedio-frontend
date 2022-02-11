import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import wallImg from '../../../assets/textures/White_Wall.jpeg';

const WALL_WIDTH = 20;
const WALL_HEIGHT = 10;
const WALL_INTERVAL = WALL_WIDTH / 2;
const WALL_THICKNESS = 2;

interface Props {
  wallMap: THREE.Texture;
}

function TestImgOverBox() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [2.3, 1.5, 0.1],
    // rotation: [0, 0, -Math.PI / 2],
    position: [0, 3, -9],
  }));

  const testMap = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  );
  testMap.wrapS = THREE.MirroredRepeatWrapping;
  testMap.wrapT = THREE.MirroredRepeatWrapping;
  // testMap.repeat.set(5, 5);

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2.3, 1.5, 0.1]} />
      <meshBasicMaterial map={testMap} />
    </mesh>
  );
}

function FrontWall({ wallMap }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    position: [0, 0, -WALL_INTERVAL],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function LeftWall({ wallMap }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    rotation: [0, -Math.PI / 2, 0],
    position: [-WALL_INTERVAL, 0, 0],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function BackWall({ wallMap }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    position: [0, 0, WALL_INTERVAL],
  }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
      <meshBasicMaterial map={wallMap} />
    </mesh>
  );
}

function RightWall({ wallMap }: Props) {
  const [refFront] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    rotation: [0, -Math.PI / 2, 0],
    position: [WALL_INTERVAL, 0, 0],
  }));
  return (
    <mesh ref={refFront}>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
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
      {/* unsplash 이미지 입힌 예시 */}
      <TestImgOverBox />
    </>
  );
}

export default Walls;
