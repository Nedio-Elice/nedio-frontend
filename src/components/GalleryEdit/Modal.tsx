import { useState, useRef, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { backgroundGradient, flexCenter } from '../../styles/mixins';

import { capitalizeString, isEmpty } from '../../utils/galleryEdit';
import {
  ChangeValueWithName,
  ImageInfo,
  ModalProps,
} from '../../types/GalleryEdit';
import { MESSAGE } from '../../constants/messages';

import Description from './Description';
import Title from './Title';
import Artwork from './Artwork';

function Modal({
  halls,
  modalOn,
  hallIndex,
  pieceIndex,
  onChangeNotification,
  closeModal,
  onChange,
}: ModalProps) {
  const empty = {
    imageTitle: '',
    imageDescription: '',
    imageUrl: '',
  };

  const [inputValues, setInputValues] = useState<ImageInfo>(empty);

  const [isUpdated, setIsUpdated] = useState(false);

  const prevValues = useRef<ImageInfo>(empty);

  const handleClickCloseButton = () => {
    onChange({ hallIndex, pieceIndex, piece: prevValues.current });

    setInputValues(prevValues.current);

    closeModal();
  };

  const handleChange = ({ value, name }: ChangeValueWithName) => {
    const transformName = `image${capitalizeString(name)}`;

    const updated = {
      ...inputValues,
      [transformName]: value,
    };

    setInputValues(updated);
  };

  const handleClickDeleteButton = () => {
    setInputValues(empty);

    prevValues.current = empty;

    onChange({ hallIndex, pieceIndex, piece: empty });

    closeModal();
  };

  const handleClickAddButton = () => {
    onChangeNotification('');

    if (isEmpty(inputValues)) {
      onChangeNotification(MESSAGE.INVALID_FORM);
      return;
    }

    prevValues.current = inputValues;

    onChange({ hallIndex, pieceIndex, piece: inputValues });

    closeModal();
  };

  useEffect(() => {
    const piece: ImageInfo = halls[hallIndex]?.imagesData[pieceIndex];

    if (piece) {
      setInputValues(piece);
      prevValues.current = piece;
      setIsUpdated(!isEmpty(piece));
    }
  }, [halls, hallIndex, pieceIndex]);

  return (
    <Container modalOn={modalOn}>
      <Wrapper>
        <Header>작품 등록</Header>
        <Artwork
          label="Drag&Drop your artwork here"
          width="100%"
          height="100%"
          thumbnail={inputValues?.imageUrl || ''}
          onChangePieceImageUrl={handleChange}
        />
        <Title
          label=""
          title={inputValues?.imageTitle || ''}
          placeholder="작품의 제목을 입력해주세요"
          onChange={handleChange}
        />
        <Description
          label=""
          description={inputValues?.imageDescription || ''}
          placeholder="작품에 대해 소개해주세요"
          onChange={handleChange}
        />
        <Buttons isUpdated={isUpdated}>
          <button type="button" onClick={handleClickAddButton}>
            등 록
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

interface ContainerStyles {
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
    100% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;

const Container = styled.div<ContainerStyles>`
  display: ${(props) => (props.modalOn ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: fit-content;
  background: rgba(77, 77, 77, 0.5);
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  ${flexCenter}
  flex-direction: column;
  padding: 1em;
  padding-top: 3em;
  border-radius: 25px;
  background: #f2f3f5;
  width: 380px;
  height: 500px;
  animation: ${modalUp} 0.5s ease-out forwards;

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
  border-radius: 25px 25px 0 0;
  padding: 0 1em;
  width: 100%;
  height: 2.5em;
  background-color: #1f3e5a;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 0.5px 5px -1px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
`;

const Buttons = styled.div<ButtonsStyle>`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  & > button {
    border-radius: 0.3em;
    color: #ff6e00;
    transition: all 1s;
    padding: 0.5em;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px,
      rgba(0, 0, 0, 0.1) 0px 2px 3px -1px, rgba(0, 0, 0, 0.1) 0px -1px 0px inset;

    &:first-child {
      background-color: #ff6e00;
      text-shadow: none;
      color: white;
      opacity: 1;
    }

    &:nth-child(2) {
      display: ${(props) => (props.isUpdated ? 'block' : 'none')};
    }
  }
`;
