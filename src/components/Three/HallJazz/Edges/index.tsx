import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { Box } from '@react-three/drei';
import Color from '../../../../assets/textures/FrameTexture/Color.jpg';
import Displacement from '../../../../assets/textures/FrameTexture/Displacement.png';
import Normal from '../../../../assets/textures/FrameTexture/Normal.jpg';
import AO from '../../../../assets/textures/FrameTexture/AO.jpg';
import Roughness from '../../../../assets/textures/FrameTexture/Roughness.jpg';
import Metalic from '../../../../assets/textures/FrameTexture/Metalic.jpg';

interface Props {
  width: number;
  height: number;
}

export function TopEdge({ width, height }: Props) {
  const [color, displacement, normal, ao, roughness, metalic] = useLoader<
    any,
    any
  >(THREE.TextureLoader, [Color, Displacement, Normal, AO, Roughness, Metalic]);

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 4;
  color.repeat.y = 4;

  return (
    <Box
      attach="geometry"
      args={[0.1, 0.1, width]}
      rotation={[0, Math.PI / 2, 0]}
      position={[0, height / 2, 0]}
    >
      <meshStandardMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
        roughnessMap={roughness}
        metalnessMap={metalic}
      />
    </Box>
  );
}

function BottomEdge({ width, height }: Props) {
  const [color, displacement, normal, ao, roughness, metalic] = useLoader<
    any,
    any
  >(THREE.TextureLoader, [Color, Displacement, Normal, AO, Roughness, Metalic]);

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 72;
  color.repeat.y = 72;

  return (
    <Box
      args={[0.1, 0.1, width]}
      rotation={[0, Math.PI / 2, 0]}
      position={[0, -height / 2, 0]}
    >
      <meshStandardMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
        roughnessMap={roughness}
        metalnessMap={metalic}
      />
    </Box>
  );
}

function LeftEdge({ width, height }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
  }));

  const [color, displacement, normal, ao, roughness, metalic] = useLoader<
    any,
    any
  >(THREE.TextureLoader, [Color, Displacement, Normal, AO, Roughness, Metalic]);

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 72;
  color.repeat.y = 72;

  return (
    <Box
      args={[0.1, 0.1, height - 0.1]}
      rotation={[Math.PI / 2, 0, 0]}
      position={[-width / 2 + 0.049, 0, 0]}
    >
      <meshStandardMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
        roughnessMap={roughness}
        metalnessMap={metalic}
      />
    </Box>
  );
}

function RightEdge({ width, height }: Props) {
  const [ref] = useBox(() => ({
    type: 'Static',
  }));

  const [color, displacement, normal, ao, roughness, metalic] = useLoader<
    any,
    any
  >(THREE.TextureLoader, [Color, Displacement, Normal, AO, Roughness, Metalic]);

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 72;
  color.repeat.y = 72;

  return (
    <Box
      args={[0.1, 0.1, height]}
      rotation={[Math.PI / 2, 0, 0]}
      position={[width / 2 - 0.049, 0, 0]}
    >
      <meshStandardMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
        roughnessMap={roughness}
        metalnessMap={metalic}
      />{' '}
    </Box>
  );
}

function Edges({ width, height }: Props) {
  return (
    <>
      <TopEdge width={width} height={height} />
      <BottomEdge width={width} height={height} />
      <LeftEdge width={width} height={height} />
      <RightEdge width={width} height={height} />
    </>
  );
}

export default Edges;
