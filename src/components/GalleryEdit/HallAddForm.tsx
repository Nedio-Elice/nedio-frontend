import { useState } from 'react';

import styled from 'styled-components';
import Modal from './Modal';

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

  & > button {
    margin-right: 1em;
    padding: 0.3em;
    background: none;
    border-radius: 0.5em;
    cursor: pointer;
  }
`;

interface WorksProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface HallProps {
  id: number;
  name: string;
  works?: WorksProps[];
}

interface Props {
  id: number;
  name: string;
  onChangeHallName: (parameter: HallProps) => void;
  onClickDeleteHallButton: (id: number) => void;
  onClickAddPieceButton: (piece: WorksProps) => void;
}

function HallAddForm({
  id,
  name,
  onChangeHallName,
  onClickDeleteHallButton,
  onClickAddPieceButton,
}: Props) {
  const [modalOn, setModalOn] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChangeHallName({ id, name: value });
  };

  const handleClick = () => {
    onClickDeleteHallButton(id);
  };

  const openModal = () => {
    setModalOn(true);
    console.log(modalOn);
  };

  const closeModal = () => {
    setModalOn(false);
    console.log(modalOn);
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
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} type="button" onClick={openModal}>
            작품
            <br />
            등록
          </button>
        ))}
      </AddButtons>
      <Modal
        modalOn={modalOn}
        closeModal={closeModal}
        onClickAddPieceButton={onClickAddPieceButton}
      />
    </Container>
  );
}

export default HallAddForm;
