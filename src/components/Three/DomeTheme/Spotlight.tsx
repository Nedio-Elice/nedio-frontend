import { useMemo } from 'react';

import * as THREE from 'three';

function Spotlight({
  position,
  target,
  intensity,
  penumbra,
  sNormalBias,
  sBias,
  angle,
  decay,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  const light = useMemo(() => new THREE.SpotLight(0xffffff), []);
  return (
    <>
      <primitive
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
