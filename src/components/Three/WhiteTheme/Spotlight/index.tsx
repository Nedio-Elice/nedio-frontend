import { useHelper } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { SpotLightHelper } from 'three';

function Spotlight({
  position,
  intensity,
  penumbra,
  sNormalBias,
  sBias,
  angle,
  decay,
  target,
}: any) {
  const spotLight = useRef<any>();

  // DELETE: DEBUG HELPER
  useHelper(spotLight, SpotLightHelper, 'teal');

  // useEffect(() => {
  //   spotLight?.current?.lookAt(...target);
  // }, [target]);

  return (
    <spotLight
      castShadow
      ref={target}
      position={position}
      intensity={intensity}
      penumbra={penumbra}
      shadow-bias={sBias}
      shadow-normalBias={sNormalBias}
      angle={angle}
      decay={decay}
    />
  );
}

export default Spotlight;
