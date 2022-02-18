/* eslint-disable consistent-return */
import { useBox } from '@react-three/cannon';
import { useLoader, useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useHelper } from '@react-three/drei';
import {
  Object3D,
  Raycaster,
  SpotLightHelper,
  Texture,
  TextureLoader,
  Vector3,
} from 'three';
import Spotlight from '../Spotlight';
import { DETECT_FROM_DISTANCE, PICTURE_RATIO } from '../Constants';

function Picture({ position, spotPos, rotation, data, pickItem }: any) {
  // TODO: ratio 관련 수정
  const [x, y, z] = PICTURE_RATIO.horizontal;
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [x + 4, y + 3, z + 2],
    position,
    rotation,
  }));

  const img = useLoader<Texture, string>(TextureLoader, data.imageUrl);
  const light = useRef<any>();
  const { camera } = useThree();

  // DELETE: DEBUG HELPER
  // useHelper(light, SpotLightHelper, 'red');

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

      if (
        intersects.length > 0 &&
        intersects[0].distance < DETECT_FROM_DISTANCE
      ) {
        pickItem(data);
      }
    };

    document.addEventListener('mousedown', onDocumentMouseDown);
    return () => {
      document.removeEventListener('mousedown', onDocumentMouseDown);
    };
  }, [camera, ref, pickItem, data]);

  return (
    <>
      <Spotlight
        position={spotPos}
        target={light}
        intensity={3}
        penumbra={0.8}
        sNormalBias={0.5}
        sBias={0}
        angle={Math.PI / 8}
        decay={3}
      />
      <mesh ref={ref}>
        <boxGeometry args={[x + 4, y + 3, z + 1]} />
        <meshBasicMaterial map={img} />
      </mesh>
    </>
  );
}

export default Picture;
