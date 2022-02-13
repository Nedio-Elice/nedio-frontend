import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { Box, RoundedBox, Extrude } from '@react-three/drei';
import { Triplet, useBox, usePlane } from '@react-three/cannon';
import React, { useEffect, useState, Suspense } from 'react';
import { TextureLoader } from 'three';
import { HallImages } from '../../../../types/GalleryDetail';
import Color from '../../../../assets/textures/FrameTexture/Color.jpg';
import Displacement from '../../../../assets/textures/FrameTexture/Displacement.jpg';
import Normal from '../../../../assets/textures/FrameTexture/Normal.jpg';
import AO from '../../../../assets/textures/FrameTexture/AO.jpg';
import Roughness from '../../../../assets/textures/FrameTexture/Roughness.jpg';
import Metalic from '../../../../assets/textures/FrameTexture/Metalic.jpg';
import Edges, { TopEdge } from '../Edges';

interface Props {
  data: HallImages;
}

interface PadProp {
  position: Triplet;
  rotation: Triplet;
  url: string;
}

function Frame({ position, rotation, url }: PadProp) {
  const [proportion, setProportion] = useState<number>(1); // height / width

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

  const [ref] = useBox(() => ({
    type: 'Static',
    args: [1, proportion, 0.1],
    rotation,
    position,
  }));

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

function Frames({ data }: Props) {
  const urls: string[] = [];
  data.forEach((d) => urls.push(d.imageUrl));

  return (
    <>
      <Frame
        url="https://images.unsplash.com/photo-1557576146-047908becbb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnVtYmVyJTIwMXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[-2.5, 3.2, -6.9]}
        rotation={[0, 0, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1487022171932-100463e54b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG51bWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[2.5, 3.2, -6.9]}
        rotation={[0, 0, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1556917452-890eed890648?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG51bWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[6.9, 3.2, -4]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1610072947120-8736bbfc56e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnVtYmVyJTIwNHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[6.9, 3.2, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1529239672822-1c8572f76b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnVtYmVyJTIwNXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[6.9, 3.2, 4]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1512412646187-ea209a3cd3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bnVtYmVyJTIwNnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[2.5, 3.2, 6.9]}
        rotation={[0, 0, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1611757346987-12757bddff13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnVtYmVyJTIwN3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[-2.5, 3.2, 6.9]}
        rotation={[0, 0, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1567360144960-526572cd6d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnVtYmVyJTIwOHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[-6.9, 3.2, 4]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1588942411963-f40f321ea7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnVtYmVyJTIwOXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        position={[-6.9, 3.2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Frame
        url="https://images.unsplash.com/photo-1584392282358-0334b7494872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bnVtYmVyJTIwMTB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        position={[-6.9, 3.2, -4]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </>
  );
}

export default Frames;
