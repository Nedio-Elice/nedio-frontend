import * as THREE from 'three';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Stage } from '@react-three/drei';
import axiosInstance from '../../../api/api';
import { Hall, Halls } from '../../../types/GalleryDetail';
import Ceiling from './Ceiling';
import Ground from './Ground';
import Frames from './Frames';
import Walls from './Walls';
import Pillar from './Pillar';
import Chandelier from './Chandelier';
import Lamp from './Lamp';
import Sound from './Sound';
import Piano from './Piano';

function HallJazz() {
  const dispatch = useDispatch();
  const { hallId } = useParams();
  const [hall, setHall] = useState<Hall | null>(null);

  useEffect(() => {
    const fetchHall = async () => {
      try {
        await axiosInstance
          .get<Halls>(`galleries/62066a3a6271469c0a8f770a`)
          .then((response: AxiosResponse) => {
            setHall(response.data.data.halls[0]);
          });
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };
    fetchHall();
  }, []);
  return (
    <>
      <Stage intensity={0.001} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.3} position={[-4, 3.5, -4]} />
      <pointLight castShadow intensity={0.3} position={[4, 3.5, -4]} />
      <pointLight castShadow intensity={0.3} position={[4, 3.5, 4]} />
      <pointLight castShadow intensity={0.3} position={[-4, 3.5, 4]} />
      <Walls />
      <Ceiling />
      <Chandelier position={[-3, -1.5, -3]} scale={2.5} />
      <Chandelier position={[-3, -1.5, 3]} scale={2.5} />
      <Chandelier position={[3, -1.5, -3]} scale={2.5} />
      <Chandelier position={[3, -1.5, 3]} scale={2.5} />
      <Lamp position={[6.5, 1, 6.5]} scale={4} />
      <Piano position={[0, 1, 0]} scale={1.8} />
      {hall && <Frames data={hall.imagesData} />}
      <Ground position={[0, 1, 0]} wireframe={false} />
      <Sound />
    </>
  );
}

export default HallJazz;
