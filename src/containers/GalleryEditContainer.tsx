import { useState } from 'react';

import GalleryEdit from '../components/GalleryEdit';

interface WorksProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface HallProps {
  id: number;
  name: string;
  works?: WorksProps[];
}

interface GalleryProps {
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  description: string;
  posterUrl: string;
  halls: HallProps[];
}

function GalleryEditContainer() {
  const initialValue = {
    title: '',
    category: '',
    startDate: '',
    endDate: '',
    description: '',
    posterUrl: '',
    halls: [],
  };
  // TODO: 리덕스 추가
  const [gallery, setGallery] = useState<GalleryProps>(initialValue);

  console.log(gallery);

  const { halls } = gallery;

  const handleClickAddHallButton = () => {
    const id = new Date().valueOf();

    setGallery((current) => {
      return {
        ...current,
        halls: [
          ...current.halls,
          {
            id,
            name: '',
            works: [],
          },
        ],
      };
    });
  };

  const handleChangeHallName = ({ id, name }: HallProps) => {
    const newHalls = halls.map((hall) =>
      hall.id === id ? { ...hall, name } : hall,
    );

    setGallery((current) => {
      return {
        ...current,
        halls: newHalls,
      };
    });
  };

  const handleClickDeleteHallButton = (id: number) => {
    const newHalls = halls.filter((hall) => hall.id !== id);

    setGallery((current) => {
      return {
        ...current,
        halls: newHalls,
      };
    });
  };

  const handleClickAddPieceButton = (piece: WorksProps) => {
    const { title, description, imageUrl } = piece;

    // TOOD: 리덕스 상태 추가
    console.log(title, description, imageUrl);
  };

  const handleChangeGalleryInputField = (value: string, name: string) => {
    setGallery((current) => {
      return {
        ...current,
        [name]: value,
      };
    });
    console.log(gallery);
  };

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        onClickDeleteHallButton={handleClickDeleteHallButton}
        onChangeHallName={handleChangeHallName}
        onClickAddPieceButton={handleClickAddPieceButton}
        onChangeGalleryInputField={handleChangeGalleryInputField}
        gallery={gallery}
      />
    </div>
  );
}

export default GalleryEditContainer;
