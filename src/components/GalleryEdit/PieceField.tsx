import { useState } from 'react';

import styled from 'styled-components';

import { ImagesData } from '../../types/GalleryEdit';

import { isEmpty } from '../../utils/galleryEdit';

import Modal from './Modal';
import PieceButton from './PieceButton';

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

interface Props {
  piece: ImagesData;
  onChange: (piece: ImagesData) => void;
  onChangePosterUrl: (formData: FormData, piece?: ImagesData) => void;
}

function PieceField({ piece, onChange, onChangePosterUrl }: Props) {
  const [modalOn, setModalOn] = useState(false);

  const { imageId } = piece;

  const isUpdated = !isEmpty(piece);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <Container key={imageId}>
      <PieceButton openModal={openModal} thumbnail={piece.imageUrl} />
      <Modal
        piece={piece}
        modalOn={modalOn}
        closeModal={closeModal}
        onChange={onChange}
        isUpdated={isUpdated}
        onChangePosterUrl={onChangePosterUrl}
      />
    </Container>
  );
}

export default PieceField;
