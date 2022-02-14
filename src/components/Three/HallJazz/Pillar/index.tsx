import { useBox, useCylinder } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import Color from '../../../../assets/textures/WallTexture/Color.jpg';
import Displacement from '../../../../assets/textures/WallTexture/Displacement.png';
import Normal from '../../../../assets/textures/WallTexture/Normal.jpg';
import AO from '../../../../assets/textures/WallTexture/AO.jpg';

// const PILLAR_WIDTH = 14;
// const PILLAR_HEIGHT = 4;
// const PILLAR_THICKNESS = 0.01;

const RADIUS_TOP = 2;
const RADIUS_BOTTOM = 2;
const PILLAR_HEIGHT = 4;
const RADIAL_SEGMENTS = 32;

function Pillar() {
  const [ref] = useCylinder(() => ({
    type: 'Static',
    args: [RADIUS_TOP, RADIUS_BOTTOM, PILLAR_HEIGHT, RADIAL_SEGMENTS],
    position: [0, 3, 0],
  }));

  const [color, displacement, normal, ao] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO],
  );

  return (
    <mesh ref={ref} receiveShadow>
      <cylinderGeometry
        args={[RADIUS_TOP, RADIUS_BOTTOM, PILLAR_HEIGHT, RADIAL_SEGMENTS]}
      />
      <meshStandardMaterial
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.2}
        aoMap={ao}
      />
    </mesh>
  );
}

export default Pillar;
