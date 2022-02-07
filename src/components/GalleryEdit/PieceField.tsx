import { useState } from 'react';

import styled from 'styled-components';

import { ImageInfo } from '../../types/GalleryEdit';
import { isEmpty } from '../../utils/galleryEdit';

import PieceButton from './PieceButton';
import Modal from './Modal';

interface Props {
  piece: ImageInfo;
  hallIndex: number;
  pieceIndex: number;
  onChange: (hallIndex: number, pieceIndex: number, piece: ImageInfo) => void;
  onChangePosterUrl: (formData: FormData) => void;
  onChangeNotification: (text: string) => void;
}

function PieceField({
  piece,
  hallIndex,
  pieceIndex,
  onChange,
  onChangePosterUrl,
  onChangeNotification,
}: Props) {
  const [modalOn, setModalOn] = useState(false);

  const isUpdated = !isEmpty(piece);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <Container>
      <PieceButton openModal={openModal} thumbnail={piece.imageUrl} />
      <Modal
        piece={piece}
        hallIndex={hallIndex}
        pieceIndex={pieceIndex}
        modalOn={modalOn}
        closeModal={closeModal}
        onChange={onChange}
        isUpdated={isUpdated}
        onChangePosterUrl={onChangePosterUrl}
        onChangeNotification={onChangeNotification}
      />
    </Container>
  );
}

export default PieceField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1em;
  width: 100%;
  @media only screen and (max-width: 720px) {
    align-items: center;
  }
`;
