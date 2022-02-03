import { useState } from 'react';

import GalleryEdit from '../components/GalleryEdit';

interface HallProps {
  id: number;
  name: string;
}

function GalleryEditContainer() {
  const [halls, setHalls] = useState<HallProps[]>([]);

  const handleClickAddHallButton = () => {
    const id = new Date().valueOf();

    setHalls([
      ...halls,
      {
        id,
        name: '',
      },
    ]);
  };

  const handleChangeHallName = ({ id, name }: HallProps) => {
    const newHalls = halls.map((hall) =>
      hall.id === id ? { ...hall, name } : hall,
    );
    setHalls(newHalls);
  };

  const handleClickDeleteHallButton = (id: number) => {
    const newHalls = halls.filter((hall) => hall.id !== id);
    setHalls(newHalls);
  };

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        onClickDeleteHallButton={handleClickDeleteHallButton}
        onChangeHallName={handleChangeHallName}
        halls={halls}
      />
    </div>
  );
}

export default GalleryEditContainer;
