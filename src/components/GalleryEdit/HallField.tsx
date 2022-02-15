import { memo } from 'react';

import styled from 'styled-components';
import { bin } from '../../constants/images';
import {
  greyButton,
  hoverOrange,
  inputArea,
  inputPadding,
  placeholders,
} from '../../styles/mixins';

import { HallFieldProps } from '../../types/GalleryEdit';

import Piece from './Piece';
import Themes from './Themes';

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
}: HallFieldProps) {
  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChangeHallName({ index: hallIndex, value });
  };

  const handleClick = () => {
    onClickDeleteHallButton(hallIndex);
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
        <button type="button">미리보기</button>
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
    </Container>
  );
}

export default memo(HallField);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2em;
  width: 100%;

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
      margin: 0.5em 0;
      align-items: center;
      justify-content: center;
    }
  }
`;
