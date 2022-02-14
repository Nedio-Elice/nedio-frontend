import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';
import Color from '../../../../assets/textures/JazzThemeTexture/GroundTexture/Color.jpg';
import Displacement from '../../../../assets/textures/JazzThemeTexture/GroundTexture/Displacement.png';
import Normal from '../../../../assets/textures/JazzThemeTexture/GroundTexture/Normal.jpg';
import AO from '../../../../assets/textures/JazzThemeTexture/GroundTexture/AO.jpg';
import Roughness from '../../../../assets/textures/JazzThemeTexture/GroundTexture/Roughness.jpg';

function Ground(props: any) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  const [color, displacement, normal, ao, roughness] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO, Roughness],
  );

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 72;
  color.repeat.y = 72;

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
        roughnessMap={roughness}
      />
    </mesh>
  );
}

export default Ground;
