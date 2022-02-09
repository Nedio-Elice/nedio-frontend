import { useState } from 'react';
import styled from 'styled-components';

import { HallsProps, Index } from '../../types/GalleryEdit';

import HallAddForm from './HallAddForm';
import Modal from './Modal';

function Halls({
  halls,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangeNotification,
}: HallsProps) {
  const [modalOn, setModalOn] = useState(false);
  const [indexNumbers, setIndexNumbers] = useState<Index>({
    hallIndex: 0,
    pieceIndex: 0,
  });

  const openModal = async ({ hallIndex, pieceIndex }: Index) => {
    await setIndexNumbers({
      hallIndex,
      pieceIndex,
    });
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  const { hallIndex, pieceIndex } = indexNumbers;

  return (
    <Container>
      {halls
        ? halls.map(({ hallName, imagesData }, index) => {
            return (
              <HallAddForm
                key={`hall-${index}`}
                halls={halls}
                hallIndex={index}
                name={hallName}
                pieces={imagesData}
                openModal={openModal}
                onChangeHallName={onChangeHallName}
                onClickDeleteHallButton={onClickDeleteHallButton}
              />
            );
          })
        : '전시관을 등록해주세요 :)'}
      <Modal
        halls={halls}
        modalOn={modalOn}
        hallIndex={hallIndex}
        pieceIndex={pieceIndex}
        closeModal={closeModal}
        onChange={onChangePieceField}
        onChangeNotification={onChangeNotification}
      />
    </Container>
  );
}

export default Halls;

const Container = styled.div`
  width: 680px;
  @media only screen and (max-width: 720px) {
    width: 340px;
  }
`;
