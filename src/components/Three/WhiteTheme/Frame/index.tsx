/* eslint-disable no-param-reassign */
import { useLoader } from '@react-three/fiber';
import { useMemo, useState } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import frameObj from '../../../../assets/3D/frame.obj';

function Frame({ position, scale, children }: any) {
  const obj = useLoader(OBJLoader, frameObj);

  //   const { scene } = useLoader<any, any>(OBJLoader, frameObj);
  //   const copiedScene = useMemo(() => scene.clone(), [scene]);
  //   console.log(copiedScene);
  //   obj.traverse(function (child: any) {
  //     console.log(child);
  //   });
  //   //   obj = null;

  return (
    <>
      <primitive object={obj} position={position} scale={scale} />
      {children}
    </>
  );
}

export default Frame;
