import { useBox } from '@react-three/cannon';
import { useHelper } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { SpotLightHelper } from 'three';
import Spotlight from '../SpotLight';

function Picture({ size, position, spotPos, rotation, imgURL }: any) {
  const [x, y, z] = size;

  // Defence Close to IMG
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [x, y, z + 2],
    position,
    rotation,
  }));

  const testMap = useLoader<THREE.Texture, string>(THREE.TextureLoader, imgURL);
  const light = useRef<any>();

  // DELETE: DEBUG HELPER
  // useHelper(light, SpotLightHelper, 'red');

  useLayoutEffect(() => {
    if (light.current) light.current.target = ref.current;
  }, [ref]);

  const handleClick = () => {
    console.log('hello');
  };

  return (
    <>
      <Spotlight
        position={spotPos}
        target={light}
        intensity={3}
        penumbra={0.8}
        sNormalBias={0.5}
        sBias={0}
        angle={Math.PI / 8}
        decay={3}
      />
      <mesh ref={ref} onClick={() => handleClick()}>
        <boxGeometry args={[x, y, z + 1]} />
        <meshBasicMaterial map={testMap} />
      </mesh>
    </>
  );
}

export default Picture;
