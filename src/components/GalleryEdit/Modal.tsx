import styled from 'styled-components';

import Description from './Description';
import Poster from './Poster';
import Title from './Title';

import { Piece } from '../../types/GalleryEdit';

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

interface Props {
  piece: Piece;
  modalOn: boolean;
  closeModal: () => void;
  onChange: (piece: Piece) => void;
}

function Modal({ piece, modalOn, closeModal, onChange }: Props) {
  const { title, description } = piece;

  const handleClickCloseButton = () => {
    closeModal();
  };

  const handleChange = (value: string, name: string) => {
    const newPiece = {
      ...piece,
      [name]: value,
    };

    onChange(newPiece);
  };

  const handleClickAddButton = () => {
    // TOOD: 이미지 URL 넣기
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
