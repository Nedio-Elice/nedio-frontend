import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Color from '../../../../assets/textures/WallTexture/Color.jpg';
import Displacement from '../../../../assets/textures/WallTexture/Displacement.png';
import Normal from '../../../../assets/textures/WallTexture/Normal.jpg';
import AO from '../../../../assets/textures/WallTexture/AO.jpg';
import Roughness from '../../../../assets/textures/WallTexture/Roughness.jpg';

const WALL_WIDTH = 14;
const WALL_HEIGHT = 4;
const WALL_INTERVAL = WALL_WIDTH / 2;
const WALL_THICKNESS = 0.01;

function FrontWall() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    position: [0, 3, -WALL_INTERVAL],
  }));

  const [color, displacement, normal, ao, roughness] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO, Roughness],
  );

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry
        attach="geometry"
        args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]}
      />
      <meshStandardMaterial
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
        roughnessMap={roughness}
        roughness={0.7}
      />
    </mesh>
  );
}

function LeftWall() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    rotation: [0, -Math.PI / 2, 0],
    position: [-WALL_INTERVAL, 3, 0],
  }));

  const [color, displacement, normal, ao] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO],
  );

  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
      <meshStandardMaterial
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
      />
    </mesh>
  );
}

function BackWall() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    position: [0, 3, WALL_INTERVAL],
  }));

  const [color, displacement, normal, ao] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO],
  );
  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
      <meshStandardMaterial
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
      />
    </mesh>
  );
}

function RightWall() {
  const [refFront] = useBox(() => ({
    type: 'Static',
    args: [WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS],
    rotation: [0, -Math.PI / 2, 0],
    position: [WALL_INTERVAL, 3, 0],
  }));

  const [color, displacement, normal, ao] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO],
  );

  return (
    <mesh ref={refFront} receiveShadow>
      <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT, WALL_THICKNESS]} />
      <meshStandardMaterial
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
      />
    </mesh>
  );
}

function Walls() {
  return (
    <>
      <FrontWall />
      <LeftWall />
      <RightWall />
      <BackWall />
    </>
  );
}

export default Walls;
