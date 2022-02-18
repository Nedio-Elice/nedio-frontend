import { useBox } from '@react-three/cannon';

function Boundary({ wallSize, ...props }: any) {
  const [ref] = useBox(() => ({
    args: wallSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry attach="geometry" args={wallSize} />
      <meshLambertMaterial attach="material" visible={false} />
    </mesh>
  );
}

export default Boundary;
