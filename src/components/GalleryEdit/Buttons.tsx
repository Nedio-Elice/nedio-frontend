import styled from 'styled-components';

const Container = styled.div`
  width: 680px;
  display: flex;
  justify-content: start;
  margin-bottom: 1.5em;

  button {
    height: 2em;
    &:last-child {
      margin-left: auto;
      background-color: #ff6e00;
      text-shadow: none;
      color: white;
    }
  }

  button + button {
    margin-left: 1em;
  }

  @media only screen and (max-width: 720px) {
    width: 340px;
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
