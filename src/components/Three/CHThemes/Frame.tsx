/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useLayoutEffect, useRef } from 'react';

import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { Object3D, Raycaster, Vector3 } from 'three';
import { useBox } from '@react-three/cannon';

import Light from './Light';
import Edge from './Edge';

function Frame({ path, frameSize, pickItem, customLight, ...props }: any) {
  const [ref] = useBox(() => ({
    args: frameSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));

  const lightPosition = customLight || [0, 200, 0];

  const [dx, dy, dz] = frameSize;

  const edgeSize = [dx + 2, dy + 2, dz - 1];

  const [x, y, z] = props.position;

  const texture = useLoader<THREE.Texture, string>(THREE.TextureLoader, path);

  const light = useRef<any>();

  const { camera } = useThree();

  useLayoutEffect(() => {
    if (light.current) light.current.target = ref.current;
  }, [ref]);

  useEffect(() => {
    if (!ref) return;

    const onDocumentMouseDown = (e: MouseEvent) => {
      e.preventDefault();

      const obj = ref.current as Object3D;

      const cameraDir = new Vector3();
      camera.getWorldDirection(cameraDir);

      const raycaster = new Raycaster(camera.position, cameraDir);

      const intersects = raycaster.intersectObject(obj);

      if (intersects.length > 0 && intersects[0].distance < 30) {
        pickItem({
          imageTitle: 'TITLE',
          imageDescription: 'This is..',
          imageUrl: path,
        });
      }
    };

    document.addEventListener('mousedown', onDocumentMouseDown);
    return () => {
      document.removeEventListener('mousedown', onDocumentMouseDown);
    };
  }, [camera, ref, pickItem, path]);

  return (
    <>
      <Light position={lightPosition} target={[x, y, z]} />
      <mesh ref={ref} receiveShadow>
        <boxBufferGeometry attach="geometry" args={frameSize} />
        <meshPhongMaterial
          map={texture}
          attach="material"
          side={THREE.DoubleSide}
        />
      </mesh>
      <Edge
        position={[x, y, z]}
        edgeSize={edgeSize}
        rotation={props.rotation}
      />
    </>
  );
}

export default Frame;
