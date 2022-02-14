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
  return (
    <spotLight
      castShadow
      receiveShadow
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
