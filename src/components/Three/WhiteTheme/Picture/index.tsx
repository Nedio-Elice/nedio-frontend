import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper, Texture, TextureLoader } from 'three';
import Spotlight from '../SpotLight';

function Picture({ position, spotPos, rotation, imgURL }: any) {
  // TODO: ratio 관련 scale 조절
  const [x, y, z] = [12, 8, 0.1];

  // Defence Close to IMG
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [x, y, z + 2],
    position,
    rotation,
  }));

  const img = useLoader<Texture, string>(TextureLoader, imgURL);
  const light = useRef<any>();

  // DELETE: DEBUG HELPER
  useHelper(light, SpotLightHelper, 'red');

  useLayoutEffect(() => {
    if (light.current) light.current.target = ref.current;
  }, [ref]);

  // TODO: modal 관련
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
        <meshBasicMaterial map={img} />
      </mesh>
    </>
  );
}

export default Picture;
