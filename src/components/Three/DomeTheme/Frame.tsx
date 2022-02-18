/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useLayoutEffect, useRef } from 'react';

import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { Object3D, Raycaster, Vector3 } from 'three';
import { useBox } from '@react-three/cannon';

import Light from './Light';

import { defaultPoster } from '../../../constants/images';

function Frame({
  imageUrl,
  frameSize,
  pickItem,
  customLight,
  imageTitle,
  imageDescription,
  width,
  height,
  ...props
}: any) {
  const [ref] = useBox(() => ({
    args: frameSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));
  const { camera } = useThree();

  const path = imageUrl !== '' ? imageUrl : defaultPoster;
  const texture = useLoader<THREE.Texture, string>(THREE.TextureLoader, path);

  const light = useRef<any>();
  const lightPosition = customLight || [0, 200, 0];

  const [x, y, z] = props.position;

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
          imageTitle,
          imageDescription,
          imageUrl: path,
          width,
          height,
        });
      }
    };

    document.addEventListener('mousedown', onDocumentMouseDown);
    return () => {
      document.removeEventListener('mousedown', onDocumentMouseDown);
    };
  }, [
    camera,
    ref,
    pickItem,
    imageUrl,
    imageTitle,
    imageDescription,
    path,
    width,
    height,
  ]);

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
    </>
  );
}

export default Frame;
