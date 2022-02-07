import styled from 'styled-components';
import {
  greyButton,
  hoverOrange,
  inputArea,
  placeholders,
} from '../../styles/mixins';

import { ImageInfo } from '../../types/GalleryEdit';

import PieceField from './PieceField';

interface Props {
  name: string;
  hallIndex: number;
  pieces: ImageInfo[];
  onChangeHallName: (index: number, value: string) => void;
  onClickDeleteHallButton: (index: number) => void;
  onChangePieceField: (
    hallIndex: number,
    pieceIndex: number,
    piece: ImageInfo,
  ) => void;
  onChangePosterUrl: (formData: FormData) => void;
  onChangeNotification: (text: string) => void;
}

function HallAddForm({
  name,
  pieces,
  hallIndex,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangePosterUrl,
  onChangeNotification,
}: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    console.log(hallIndex);
    onChangeHallName(hallIndex, value);
  };

  const handleClick = () => {
    console.log(hallIndex);
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
        <button type="button" onClick={handleClick}>
          전시관 삭제
        </button>
      </Wrapper>
      <AddButtons>
        {pieces.map((piece, index) => (
          <PieceField
            key={index}
            piece={piece}
            pieceIndex={index}
            hallIndex={hallIndex}
            onChange={onChangePieceField}
            onChangePosterUrl={onChangePosterUrl}
            onChangeNotification={onChangeNotification}
          />
        ))}
      </AddButtons>
    </Container>
  );
}

export default HallAddForm;

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
  margin-bottom: 1em;
  & > button {
    ${greyButton}
    transition: all 1s;

    ${hoverOrange}
  }

  & > input {
    ${inputArea}
    ${placeholders}
    margin-right: 1em;
    width: 5em;
  }
`;

const AddButtons = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
