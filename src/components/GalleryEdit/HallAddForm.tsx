import styled from 'styled-components';

import { ImagesData } from '../../types/GalleryEdit';

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
    border-radius: 0.3em;
    margin-left: auto;
    background: rgba(242, 243, 245, 0.79);
    text-shadow: none;
    color: #e1e1e1;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
    transition: all 1s;
    &:hover {
      color: #ff6e00;
    }
  }

  & > input {
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

interface Props {
  id: string;
  name: string;
  pieces: ImagesData[];
  onChangeHallName: (id: string, value: string) => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangePieceField: (piece: ImagesData) => void;
  onChangePosterUrl: (formData: FormData, piece?: ImagesData) => void;
  onChangeNotification: (text: string) => void;
}

function HallAddForm({
  id,
  name,
  pieces,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangePosterUrl,
  onChangeNotification,
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
            key={piece.imageId}
            piece={piece}
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
