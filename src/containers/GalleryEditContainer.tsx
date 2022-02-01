import { useState } from 'react';

import GalleryEdit from '../components/GalleryEdit';

function GalleryEditContainer() {
  const mockHalls = [
    {
      id: 1,
      name: '1관',
    },
    {
      id: 2,
      name: '2관',
    },
  ];

  const handleClickAddHallButton = () => {
    console.log('전시관 추가!');
  };

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        halls={mockHalls}
      />
    </div>
  );
}

export default GalleryEditContainer;
