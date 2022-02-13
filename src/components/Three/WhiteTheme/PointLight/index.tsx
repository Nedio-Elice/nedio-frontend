import { useMemo } from 'react';
import { PointLight as Light, PointLightHelper } from 'three';

function PointLight({ position, intensity }: any) {
  const light = useMemo(() => new Light(0xffffff), []);

  return (
    <>
      <primitive object={light} position={position} intensity={intensity} />
      <primitive object={new PointLightHelper(light)} />
    </>
  );
}

export default PointLight;
