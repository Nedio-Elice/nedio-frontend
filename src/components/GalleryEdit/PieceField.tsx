import { useState } from 'react';

import styled from 'styled-components';

import { Piece } from '../../types/GalleryEdit';

import Modal from './Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
  width: 100%;

  & > button {
    margin-right: 1em;
    padding: 0.3em;
    background: none;
    border-radius: 0.5em;
    cursor: pointer;
  }
`;

interface Props {
  piece: Piece;
  onChange: (piece: Piece) => void;
}

function PieceField({ piece, onChange }: Props) {
  const [modalOn, setModalOn] = useState(false);

  const { id } = piece;

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <Container key={id}>
      <button type="button" onClick={openModal}>
        작품
        <br />
        등록
      </button>
      <Modal
        piece={piece}
        modalOn={modalOn}
        closeModal={closeModal}
        onChange={onChange}
      />
    </Container>
  );
}

export default PieceField;
