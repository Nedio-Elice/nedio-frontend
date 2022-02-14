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
import Chandelier from './Chandelier';
import Lamp from './Lamp';
import Sound from './Sound';
import Piano from './Piano';
import Player from '../Player';

interface Props {
  pickItem: (item: any) => void;
}

function JazzTheme({ pickItem }: Props) {
  const dispatch = useDispatch();
  const { hallId, id } = useParams();
  const [hall, setHall] = useState<Hall | null>(null);
  useEffect(() => {
    const fetchHall = async () => {
      try {
        await axiosInstance
          .get<Halls>(`galleries/6209e28c49d9097ef94e0de7`)
          .then((response: AxiosResponse) => {
            const halls = response.data.data;

            const currentHall = halls.find(
              (h: Hall) => h.hallObjectId === hallId,
            );
            setHall(currentHall);
          });
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };
    fetchHall();
  }, [hallId]);
  return (
    <>
      <Stage intensity={0.001} />
      <ambientLight intensity={0.3} />
      <Player position={[0, 2.5, -2]} speed={[60]} />
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
      {hall && <Frames data={hall.imagesData} pickItem={pickItem} />}
      <Ground position={[0, 1, 0]} wireframe={false} />
      <Sound />
    </>
  );
}

export default JazzTheme;
