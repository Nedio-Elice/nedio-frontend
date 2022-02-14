import { useMemo, useRef } from 'react';

import * as THREE from 'three';
// import { useHelper } from '@react-three/drei';

function Spotlight({
  position,
  target,
  intensity,
  penumbra,
  sNormalBias,
  sBias,
  angle,
  decay,
}: any) {
  // const spotLight = useRef();
  // useHelper(spotLight, THREE.SpotLightHelper, 'teal');

  const light = useMemo(() => new THREE.SpotLight(0xffffff), []);
  return (
    <>
      <primitive
        // ref={spotLight}
        object={light}
        castShadow
        position={position}
        intensity={intensity}
        penumbra={penumbra}
        shadow-bias={sBias}
        shadow-normalBias={sNormalBias}
        angle={angle}
        decay={decay}
      />
      <primitive object={light.target} position={target} />
    </>
  );
}

export default Spotlight;
