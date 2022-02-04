import styled from 'styled-components';

import { Piece } from '../../types/GalleryEdit';

import PieceField from './PieceField';

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
    background: none;
    border: none;
    background-color: tomato;
    color: white;
    border-radius: 0.5em;
    cursor: pointer;
  }

  & > input {
    border: none;
    border-bottom: 1px solid black;
    margin-right: 1em;
    width: 5em;
  }
`;

const AddButtons = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  id: string;
  name: string;
  pieces: Piece[];
  onChangeHallName: (id: string, value: string) => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangePieceField: (piece: Piece) => void;
  onChangePosterUrl: (formData: any, piece?: Piece) => void;
}

function HallAddForm({
  id,
  name,
  pieces,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangePosterUrl,
}: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChangeHallName(id, value);
  };

  const handleClick = () => {
    onClickDeleteHallButton(id);
  };

  return (
    <Container key={id}>
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
        {pieces.map((piece) => (
          <PieceField
            key={piece.id}
            piece={piece}
            onChange={onChangePieceField}
            onChangePosterUrl={onChangePosterUrl}
          />
        ))}
      </AddButtons>
    </Container>
  );
}

export default HallAddForm;
