import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { Triplet, useBox } from '@react-three/cannon';
import { useEffect, useState } from 'react';
import { Object3D, Raycaster, Vector3 } from 'three';
import { HallImageData, HallImages } from '../../../../types/GalleryDetail';
import { positions, rotations } from './orientation';

import Color from '../../../../assets/textures/JazzThemeTexture/FrameTexture/Color.jpg';
import Displacement from '../../../../assets/textures/JazzThemeTexture/FrameTexture/Displacement.jpg';
import Normal from '../../../../assets/textures/JazzThemeTexture/FrameTexture/Normal.jpg';
import AO from '../../../../assets/textures/JazzThemeTexture/FrameTexture/AO.jpg';
import Roughness from '../../../../assets/textures/JazzThemeTexture/FrameTexture/Roughness.jpg';
import Metalic from '../../../../assets/textures/JazzThemeTexture/FrameTexture/Metalic.jpg';

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
  return (
    <>
      {data.map((image, idx) => {
        if (image.imageUrl !== '') {
          return (
            <Frame
              key={`${image.imageTitle}-image${idx}`}
              image={image}
              position={positions[idx]}
              rotation={rotations[idx]}
              pickItem={pickItem}
            />
          );
        }
        return <mesh key={`${image.imageTitle}-image${idx}`} />;
      })}
    </>
  );
}

export default Frames;
