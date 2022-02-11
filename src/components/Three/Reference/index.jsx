import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane, Debug } from '@react-three/cannon';
import styled from 'styled-components';
import { TextureLoader } from 'three';
import Player from '../Player';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: none;
  background-color: rgba(0, 0, 0, 0.8);
`;

// eslint-disable-next-line react/prop-types
function Ground({ color = 'none', ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ['SolarPanel.jpg'],
  );

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[50, 50]} />
      <meshPhongMaterial
        color={color}
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

// eslint-disable-next-line react/prop-types
function Ceiling({ color = 'none', ...props }) {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ['SolarPanel.jpg'],
  );

  const ceilingSize = [50, 50, 20];

  const [ref] = useBox(() => ({
    args: ceilingSize,
    ...props,
  }));
  return (
    <mesh ref={ref} castShadow>
      <planeBufferGeometry args={ceilingSize} />
      <meshPhongMaterial
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        color={color}
      />
    </mesh>
  );
}

// eslint-disable-next-line react/prop-types
function Wall({ color = 'none', ...props }) {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ['Fabric.jpg'],
  );

  const wallSize = [50, 25, 1];

  const [ref] = useBox(() => ({
    args: wallSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry args={wallSize} />
      <meshLambertMaterial
        color={color}
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

// eslint-disable-next-line react/prop-types
function Frame({ color = 'none', ...props }) {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ['Plaster.jpg'],
  );

  const frameSize = [7, 5, 0.5];

  const [ref] = useBox(() => ({
    args: frameSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry args={frameSize} />
      <meshLambertMaterial
        color={color}
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
}

export default function SampleContainer() {
  return (
    <Container>
      <Canvas>
        {/* <OrbitControls /> */}
        <Stars />
        <hemisphereLight intensity={0.55} />
        {/* <directionalLight
          position={[25, 10, 0]}
          angle={0.1}
          intensity={2}
          castShadow
        /> */}
        <spotLight
          position={[10, 20, 30]}
          angle={2}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize-width={256}
          shadow-mapSize-height={256}
        />
        {/* <pointLight position={[1, 1, 1]} intensity={0.8} /> */}
        <Physics gravity={[0, 0, 0]}>
          {/* <Debug color="black" scale={1.1}> */}
          <Player />
          <Ground color="white" rotation={[-Math.PI / 2, 0, 0]} />
          <Ceiling
            color="yellow"
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 25, 0]}
          />
          <Wall color="white" position={[0, 12.5, 25]} />
          <Wall
            color="white"
            rotation={[0, -Math.PI / 2, 0]}
            position={[-25, 12.5, 0]}
          />
          <Wall
            color="white"
            rotation={[0, -Math.PI / 2, 0]}
            position={[25, 12.5, 0]}
          />
          <Wall color="white" position={[0, 12.5, -25]} />
          <Frame color="white" position={[10, 10, -24]} />
          <Frame color="white" position={[-10, 10, -24]} />
          <Frame color="white" position={[10, 10, 24]} />
          <Frame color="white" position={[-10, 10, 24]} />
          <Frame
            color="white"
            position={[-24, 10, 10]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <Frame
            color="white"
            position={[-24, 10, -10]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <Frame
            color="white"
            position={[24, 10, 10]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <Frame
            color="white"
            position={[24, 10, -10]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          {/* </Debug> */}
        </Physics>
      </Canvas>
    </Container>
  );
}
