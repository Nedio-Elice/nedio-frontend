import { memo, useRef } from 'react';

import styled from 'styled-components';
import {
  gradientSilver,
  greyButton,
  hoverOrange,
  inputArea,
  inputPadding,
  placeholders,
  posterShadow,
} from '../../styles/mixins';

import { HallFieldProps } from '../../types/GalleryEdit';
import themesImages from '../../constants/themesImages';
import { MESSAGE } from '../../constants/messages';
import { bin } from '../../constants/images';

import Piece from './Piece';
import Themes from './Themes';
import Modal from '../Modal';

function HallField({
  name,
  pieces,
  theme,
  halls,
  hallIndex,
  openModal,
  onChangeHallName,
  onChangeHallTheme,
  onClickDeleteHallButton,
  onChangeNotification,
}: HallFieldProps) {
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);

  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChangeHallName({ index: hallIndex, value });
  };

  const handleClick = () => {
    onClickDeleteHallButton(hallIndex);
  };

  const handleClickPreview = () => {
    // TODO: 미리보기 기능 추가
    if (!theme) {
      onChangeNotification(MESSAGE.NO_THEME);
      return;
    }

    modalRef.current?.show();
  };

  return (
    <Container>
      <Wrapper>
        <input
          type="text"
          value={name}
          placeholder="관명"
          onChange={handleChangeName}
        />
        <Themes
          label=""
          theme={theme}
          hallIndex={hallIndex}
          onChangeHallTheme={onChangeHallTheme}
        />
        <button type="button" onClick={handleClickPreview}>
          배치도
        </button>
        <button type="button" onClick={handleClick}>
          <img src={bin} alt="bin" />
        </button>
      </Wrapper>
      <PieceButtons>
        {pieces.map((_, index) => (
          <Piece
            key={index}
            halls={halls}
            pieceIndex={index}
            hallIndex={hallIndex}
            openModal={openModal}
          />
        ))}
      </PieceButtons>
      <Modal ref={modalRef} width={400} height={480} isHall={false}>
        <Preview>
          <PreviewTitle>전시관 배치도</PreviewTitle>
          <PreviewImg src={themesImages[theme]} alt="theme" />
        </Preview>
      </Modal>
    </Container>
  );
}

export default memo(HallField);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2em;
  padding: 1.5em 1em;
  border-radius: 1em;
  width: 100%;

  ${gradientSilver}
  ${posterShadow}

  & > input {
    border: none;
    border-bottom: 1px solid black;
    margin-right: 1em;
    width: 5em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5em;
  padding-right: 1em;
  width: 100%;
  & > button {
    ${greyButton}
    ${hoverOrange}
    padding: .5em;
    margin-left: 1em;
    &:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;
      height: 2em;
      width: 2em;
      margin-left: auto;
      img {
        opacity: 0.4;
      }
      &:hover img {
        opacity: 1;
      }
    }
  }

  & > input {
    ${inputArea}
    ${placeholders}
    ${inputPadding}
    width: 5em;
    &:first-child {
      margin-right: 1em;
    }
  }
`;

const PieceButtons = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(5, 1fr);
    button {
      ${greyButton}
      margin: 0.5em 0;
      align-items: center;
      justify-content: center;
      ${posterShadow}
    }
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 25px;
`;

const PreviewTitle = styled.h1`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.7);
`;

const PreviewImg = styled.img`
  height: 85%;
  border-radius: 25px;
`;
