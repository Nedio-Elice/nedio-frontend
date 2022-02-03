import { useState } from 'react';
import styled from 'styled-components';
import Description from './Description';
import Poster from './Poster';
import Title from './Title';

interface ContainerProps {
  modalOn: boolean;
}

const Container = styled.div<ContainerProps>`
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
  width: 300px;
  height: 400px;
  border: 1px solid black;

  div + div {
    margin-top: 1em;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

interface WorksProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface Props {
  id: string;
  modalOn: boolean;
  closeModal: () => void;
  onClickAddPieceButton: (piece: WorksProps) => void;
}

interface InputValues {
  title: string;
  description: string;
  imageUrl: string;
}

function Modal({ id, modalOn, closeModal, onClickAddPieceButton }: Props) {
  const inittialValue = {
    title: '',
    description: '',
    imageUrl: '',
  };

  const [inputValues, setInputValues] = useState<InputValues>(inittialValue);

  const { title, description } = inputValues;

  const handleClickCloseButton = () => {
    setInputValues(inittialValue);
    closeModal();
  };

  const handleChange = (value: string, name: string) => {
    setInputValues((current) => {
      return {
        ...current,
        [name]: value,
      };
    });
  };

  const handleClickAddButton = () => {
    // TOOD: 이미지 URL 넣기
    onClickAddPieceButton({
      id,
      title,
      description,
      imageUrl: '#',
    });
    setInputValues(inittialValue);
    closeModal();
  };

  return (
    <Container modalOn={modalOn}>
      <Wrapper>
        <Poster label="이미지 업로드" width="100%" height="100%" />
        <Title
          label=""
          title={title}
          placeholder="작품의 제목을 입력해주세요"
          onChange={handleChange}
        />
        <Description
          label=""
          description={description}
          placeholder="작품에 대해 소개해주세요"
          onChange={handleChange}
        />
        <Buttons>
          <button type="button" onClick={handleClickAddButton}>
            등록
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
