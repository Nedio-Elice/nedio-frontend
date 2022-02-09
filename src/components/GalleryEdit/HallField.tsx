import styled from 'styled-components';
import {
  greyButton,
  hoverOrange,
  inputArea,
  placeholders,
} from '../../styles/mixins';

import { HallFieldProps } from '../../types/GalleryEdit';

import Piece from './Piece';

function HallField({
  name,
  pieces,
  halls,
  hallIndex,
  openModal,
  onChangeHallName,
  onClickDeleteHallButton,
}: HallFieldProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
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
          onChange={handleChange}
        />
        <button type="button">미리보기</button>
        <button type="button" onClick={handleClick}>
          전시관 삭제
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

export default HallField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
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
  margin-bottom: 1em;
  & > button {
    ${greyButton}
    ${hoverOrange}
    padding: 0.3em;
    margin-left: 1em;
  }

  & > input {
    ${inputArea}
    ${placeholders}
    width: 5em;
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
