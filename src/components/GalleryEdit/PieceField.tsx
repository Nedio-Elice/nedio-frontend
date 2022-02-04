import { useState } from 'react';

import styled from 'styled-components';

import { Piece } from '../../types/GalleryEdit';

import { validatePieceForm } from '../../utils/galleryEdit';

import Modal from './Modal';
import PieceButton from './PieceButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
  width: 100%;
`;

interface Props {
  piece: Piece;
  onChange: (piece: Piece) => void;
}

function PieceField({ piece, onChange }: Props) {
  const [modalOn, setModalOn] = useState(false);

  const { id } = piece;

  const isUpdated = validatePieceForm(piece);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <Container key={id}>
      <PieceButton openModal={openModal} isUpdated={isUpdated} />
      <Modal
        piece={piece}
        modalOn={modalOn}
        closeModal={closeModal}
        onChange={onChange}
        isUpdated={isUpdated}
      />
    </Container>
  );
}

export default PieceField;
