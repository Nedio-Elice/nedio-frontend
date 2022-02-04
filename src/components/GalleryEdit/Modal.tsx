import { useState, useRef } from 'react';

import styled from 'styled-components';

import Description from './Description';
import Poster from './Poster';
import Title from './Title';

import { Piece } from '../../types/GalleryEdit';

interface ContainerStyle {
  modalOn: boolean;
}

interface ButtonsStyle {
  isUpdated: boolean;
}

const Container = styled.div<ContainerStyle>`
  display: ${(props) => (props.modalOn ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.modalOn ? 'rgba(0,0,0,0.4)' : 'none')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  padding-top: 2em;
  width: 300px;
  height: 400px;
  border: 1px solid black;
  position: relative;

  div + div {
    margin-top: 1em;
  }
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 1em;
  width: 100%;
  height: 2em;
  border-bottom: 1px solid black;
`;

const Buttons = styled.div<ButtonsStyle>`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & > button {
    background: none;
    border-radius: 0.3em;
    cursor: pointer;
  }

  & > button:nth-child(2) {
    display: ${(props) => (props.isUpdated ? 'block' : 'none')};
  }
`;

interface Props {
  piece: Piece;
  modalOn: boolean;
  isUpdated: boolean;
  closeModal: () => void;
  onChange: (piece: Piece) => void;
  onChangePosterUrl: (formData: any, piece?: Piece) => void;
}

function Modal({
  piece,
  modalOn,
  closeModal,
  onChange,
  isUpdated,
  onChangePosterUrl,
}: Props) {
  const [inputValues, setInputValues] = useState<Piece>(piece);

  const prevValues = useRef<Piece>(piece);

  const handleClickCloseButton = () => {
    onChange(prevValues.current);

    setInputValues(prevValues.current);

    closeModal();
  };

  const handleChange = (value: string, name: string) => {
    const newPiece = {
      ...inputValues,
      [name]: value,
    };

    setInputValues(newPiece);
  };

  const handleClickDeleteButton = () => {
    const cleanForm = {
      ...inputValues,
      title: '',
      description: '',
      imageUrl: '',
    };

    setInputValues(cleanForm);

    prevValues.current = cleanForm;

    onChange(cleanForm);

    closeModal();
  };

  const handleClickAddButton = () => {
    prevValues.current = inputValues;

    onChange(inputValues);

    closeModal();
  };

  return (
    <Container modalOn={modalOn}>
      <Wrapper>
        <Header>작품 등록</Header>
        <Poster
          label="이미지 업로드"
          width="100%"
          height="100%"
          thumbnail={piece.imageUrl}
          piece={piece}
          onChangePieceImageUrl={handleChange}
          onChangePosterUrl={onChangePosterUrl}
        />
        <Title
          label=""
          title={inputValues.title}
          placeholder="작품의 제목을 입력해주세요"
          onChange={handleChange}
        />
        <Description
          label=""
          description={inputValues.description}
          placeholder="작품에 대해 소개해주세요"
          onChange={handleChange}
        />
        <Buttons isUpdated={isUpdated}>
          <button type="button" onClick={handleClickAddButton}>
            {isUpdated ? '수정' : '등록'}
          </button>
          <button type="button" onClick={handleClickDeleteButton}>
            삭제
          </button>
          <button type="button" onClick={handleClickCloseButton}>
            취소
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
}

export default Modal;
