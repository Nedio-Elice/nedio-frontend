import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import Color from '../../../../assets/textures/JazzThemeTexture/CeilingTexture/Color.jpg';
import Displacement from '../../../../assets/textures/JazzThemeTexture/CeilingTexture/Displacement.jpg';
import Normal from '../../../../assets/textures/JazzThemeTexture/CeilingTexture/Normal.jpg';
import AO from '../../../../assets/textures/JazzThemeTexture/CeilingTexture/AO.jpg';

function Celling() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [25, 25, 0.5],
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 5, 0],
  }));

  const [color, displacement, normal, ao] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO],
  );

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 1;
  color.repeat.y = 1;

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[25, 25, 1]} />

      <meshStandardMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
      />
    </mesh>
  );
}

export default Celling;
