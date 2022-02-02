import { useState } from 'react';

import GalleryEdit from '../components/GalleryEdit';

interface HallProps {
  id: number;
  name: string;
}

function GalleryEditContainer() {
  const [halls, setHalls] = useState<HallProps[]>([]);

  const handleClickAddHallButton = () => {
    const id = halls.length + 1;

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

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        onChangeHallName={handleChangeHallName}
        halls={halls}
      />
    </div>
  );
}

export default GalleryEditContainer;
