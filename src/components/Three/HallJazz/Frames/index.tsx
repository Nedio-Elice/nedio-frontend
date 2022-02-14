import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { Box, RoundedBox, Extrude } from '@react-three/drei';
import { Triplet, useBox, usePlane } from '@react-three/cannon';
import React, { useEffect, useState, Suspense } from 'react';
import {
  Object3D,
  Raycaster,
  SpotLightHelper,
  Texture,
  TextureLoader,
  Vector3,
} from 'three';
import { HallImageData, HallImages } from '../../../../types/GalleryDetail';

import Color from '../../../../assets/textures/FrameTexture/Color.jpg';
import Displacement from '../../../../assets/textures/FrameTexture/Displacement.jpg';
import Normal from '../../../../assets/textures/FrameTexture/Normal.jpg';
import AO from '../../../../assets/textures/FrameTexture/AO.jpg';
import Roughness from '../../../../assets/textures/FrameTexture/Roughness.jpg';
import Metalic from '../../../../assets/textures/FrameTexture/Metalic.jpg';

interface Props {
  data: HallImages;
  pickItem: any;
}

interface FrameProp {
  position: Triplet;
  rotation: Triplet;
  image: HallImageData;
  pickItem: any;
}

function Frame({ position, rotation, image, pickItem }: FrameProp) {
  const DETECT_FROM_DISTANCE = 15;
  const url = image.imageUrl;
  const title = image.imageTitle;
  const description = image.imageDescription;
  const { camera } = useThree();
  const [proportion, setProportion] = useState<number>(1); // height / width

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, proportion, 0.1],
    rotation,
    position,
  }));

  useEffect(() => {
    if (!ref) return;

    const onDocumentMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const obj = ref.current as Object3D;

      const cameraDir = new Vector3();
      camera.getWorldDirection(cameraDir);

      const raycaster = new Raycaster(camera.position, cameraDir);

      const intersects = raycaster.intersectObject(obj);

      if (
        intersects.length > 0 &&
        intersects[0].distance < DETECT_FROM_DISTANCE
      ) {
        pickItem({
          title,
          content: description,
        });
      }
    };

    document.addEventListener('mousedown', onDocumentMouseDown);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('mousedown', onDocumentMouseDown);
    };
  }, [camera, ref, pickItem, title, description]);

  useEffect(() => {
    async function getSize() {
      let img: any = new Image();
      if (url !== undefined) {
        img.onload = function callback() {
          setProportion(img.height / img.width);
          img = null;
        };
        img.src = url;
      }
    }

    getSize();
  }, [proportion, url]);

  const [color, displacement, normal, ao, roughness, metalic] = useLoader<
    any,
    any
  >(THREE.TextureLoader, [Color, Displacement, Normal, AO, Roughness, Metalic]);

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 0.5;
  color.repeat.y = 1;

  const width = proportion > 1 ? 1.7 : 1.7 / proportion;
  const height = proportion > 1 ? 1.7 * proportion : 1.7;

  const frameTexture = (
    <meshStandardMaterial
      map={color}
      normalMap={normal}
      aoMap={ao}
      displacementMap={displacement}
      displacementScale={0.0005}
      roughnessMap={roughness}
      metalnessMap={metalic}
      metalness={1.65}
    />
  );

  return (
    <mesh ref={ref} receiveShadow>
      <Box
        args={[0.1, 0.1, width]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, height / 2, 0]}
      >
        {frameTexture}
      </Box>
      <Box
        args={[0.1, 0.1, width]}
        rotation={[0, Math.PI / 2, 0]}
        position={[0, -height / 2, 0]}
      >
        {frameTexture}
      </Box>

      <Box
        args={[0.1, 0.1, height - 0.1]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[-width / 2 + 0.049, 0, 0]}
      >
        {frameTexture}
      </Box>
      <Box
        args={[0.1, 0.1, height - 0.1]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[width / 2 - 0.049, 0, 0]}
      >
        {frameTexture}
      </Box>
      <Box // Width, Height and Depth of the box
        args={[width, height, 0.01]}
      >
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(url)}
          attach="material"
        />
      </Box>
    </mesh>
  );
}

function Frames({ data, pickItem }: Props) {
  const urls: string[] = [];
  data.forEach((d) => urls.push(d.imageUrl));

  return (
    <>
      <Frame
        image={data[0]}
        position={[-2.5, 3.2, -6.9]}
        rotation={[0, 0, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[1]}
        position={[2.5, 3.2, -6.9]}
        rotation={[0, 0, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[2]}
        position={[6.9, 3.2, -4]}
        rotation={[0, Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[3]}
        position={[6.9, 3.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[4]}
        position={[6.9, 3.2, 4]}
        rotation={[0, Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[5]}
        position={[2.5, 3.2, 6.9]}
        rotation={[0, 0, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[6]}
        position={[-2.5, 3.2, 6.9]}
        rotation={[0, 0, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[7]}
        position={[-6.9, 3.2, 4]}
        rotation={[0, -Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[8]}
        position={[-6.9, 3.2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        pickItem={pickItem}
      />
      <Frame
        image={data[9]}
        position={[-6.9, 3.2, -4]}
        rotation={[0, -Math.PI / 2, 0]}
        pickItem={pickItem}
      />
    </>
  );
}

export default Frames;
