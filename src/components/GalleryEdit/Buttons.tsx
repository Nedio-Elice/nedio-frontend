import styled from 'styled-components';

const Container = styled.div`
  width: 680px;
  display: flex;
  justify-content: start;
  margin-bottom: 1.5em;

  button {
    background: none;
    border-radius: 0.3em;
    cursor: pointer;
    &:last-child {
      margin-left: auto;
      background-color: black;
      color: white;
    }
  }

  button + button {
    margin-left: 1em;
  }
`;

interface Props {
  onClickAddHallButton: () => void;
  onClickUpdateGallery: () => void;
}

function Buttons({ onClickAddHallButton, onClickUpdateGallery }: Props) {
  const handleClickAddHallButton = () => {
    onClickAddHallButton();
  };

  const handleClickUpdateGallery = () => {
    onClickUpdateGallery();
  };

  return (
    <Container>
      <button type="button" onClick={handleClickAddHallButton}>
        전시관 추가
      </button>
      <button type="button">미리보기</button>
      <button type="button" onClick={handleClickUpdateGallery}>
        갤러리 생성
      </button>
    </Container>
  );
}

export default Buttons;
