import { useMemo } from 'react';
import * as THREE from 'three';

function PointLight({ position, intensity }: any) {
  const light = useMemo(() => new THREE.PointLight(0xffffff), []);

  return (
    <>
      <primitive object={light} position={position} intensity={intensity} />
      {/* <primitive object={new THREE.PointLightHelper(light)} /> */}
    </>
  );
}

export default PointLight;
