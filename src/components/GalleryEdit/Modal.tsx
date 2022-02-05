import { useState, useRef } from 'react';

import styled, { keyframes } from 'styled-components';

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

const modalUp = keyframes`
    0% {
        opacity: 0;
        transform: translate(-50%, 100%);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, 65%);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;

const Container = styled.div<ContainerStyle>`
  display: ${(props) => (props.modalOn ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: fit-content;
  background-color: ${(props) => (props.modalOn ? 'rgba(0,0,0,0.3)' : 'none')};
`;

const Wrapper = styled.div`
  animation: ${modalUp} 0.5s ease-in forwards;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 1em;
  padding-top: 2em;
  border-radius: 0.5em;
  width: 300px;
  height: 400px;
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
  border-radius: 0.5em 0.5em 0 0;
  padding: 0 1em;
  width: 100%;
  height: 2em;
  background-color: #ff6e00;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0.5px 5px -1px;
`;

const Buttons = styled.div<ButtonsStyle>`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & > button {
    border-radius: 0.3em;
    color: #ff6e00;
    transition: all 1s;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px,
      rgba(0, 0, 0, 0.1) 0px 2px 3px -1px, rgba(0, 0, 0, 0.1) 0px -1px 0px inset;

    &:first-child {
      background-color: #ff6e00;
      color: white;
      opacity: 1;
    }

    &:nth-child(2) {
      display: ${(props) => (props.isUpdated ? 'block' : 'none')};
    }
  }
`;

interface Props {
  piece: Piece;
  modalOn: boolean;
  isUpdated: boolean;
  closeModal: () => void;
  onChange: (piece: Piece) => void;
  onChangePosterUrl: (formData: FormData, piece?: Piece) => void;
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
          label="작품 이미지 끌어서 놓기"
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
            {isUpdated ? '수 정' : '등 록'}
          </button>
          <button type="button" onClick={handleClickDeleteButton}>
            삭 제
          </button>
          <button type="button" onClick={handleClickCloseButton}>
            취 소
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
}

export default Modal;
