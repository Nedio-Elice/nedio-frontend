/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
import { RootState } from '../store/root';
import axiosInstance from '../api/api';
import Buttons from '../components/Buttons';
import { useAppSelector } from '../store/hooks';
import { Gallery } from '../types/GalleryDetail';

import {
  Background,
  ButtonWrapper,
  GalleryWrapper,
} from '../styles/galleryDetailPage';
import GalleryInformation from '../containers/GalleryInfoContainer';
import GalleryComment from '../containers/CommentsContainer';
import { isOpen } from '../utils/date';

const { ButtonBasic } = Buttons;

function GalleryDetailPage() {
  const navigation = useNavigate();

  const user = useAppSelector((state: RootState) => state.user);

  const [gallery, setGallery] = useState<Gallery | null>(null);

  const { galleryId } = useParams();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        await axiosInstance
          .get<Gallery>(`galleries/${galleryId}`)
          .then((response: AxiosResponse) => {
            setGallery(response.data.data);
          });
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };
    fetchGallery();
  }, [galleryId]);

  const handleHallButtonClick = (id: string) => navigation(`/halls/${id}`);

  if (gallery === null) {
    return <Background />;
  }

  return (
    <Background>
      <GalleryWrapper>
        <GalleryInformation
          gallery={gallery}
          galleryId={galleryId}
          user={user.userInfo}
        />
        <ButtonWrapper>
          {isOpen({
            startDate: new Date(gallery.startDate),
            endDate: new Date(gallery.endDate),
          }) &&
            gallery.halls !== null &&
            gallery.halls.map((hall, idx) => {
              return (
                <ButtonBasic
                  key={hall.hallObjectId}
                  value={`${idx + 1}관`}
                  handleClick={() => handleHallButtonClick(hall.hallObjectId)}
                />
              );
            })}
        </ButtonWrapper>
        <GalleryComment gallery={gallery} galleryId={galleryId} />
      </GalleryWrapper>
    </Background>
  );
}

export default GalleryDetailPage;
