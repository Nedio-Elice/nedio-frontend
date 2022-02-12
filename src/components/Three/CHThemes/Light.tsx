import Spotlight from './Spotlight';

function Light({ position, target }: any) {
  return (
    <Spotlight
      position={position}
      target={target}
      intensity={3}
      penumbra={0.8}
      sNormalBias={0.5}
      sBias={0}
      angle={Math.PI / 10}
      decay={3}
    />
  );
}

export default Light;
