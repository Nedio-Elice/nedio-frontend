import styled from 'styled-components';
import { rightSideOrangeButton } from '../../styles/mixins';

import { GalleryButtonsProps } from '../../types/GalleryEdit';

function Buttons({
  mode,
  onClickAddHallButton,
  onClickUpdateGallery,
}: GalleryButtonsProps) {
  const handleClickAddHallButton = () => {
    onClickAddHallButton();
  };

  const handleClickUpdateGallery = () => {
    onClickUpdateGallery();
  };

  return (
    <Container mode={mode}>
      <button type="button" onClick={handleClickAddHallButton}>
        전시관 추가
      </button>
      <button type="button">미리보기</button>
      <button type="button" onClick={handleClickUpdateGallery}>
        갤러리 생성
      </button>
      <button type="button" onClick={handleClickUpdateGallery}>
        갤러리 수정
      </button>
    </Container>
  );
}

export default Buttons;

interface ContainerStyles {
  mode: 'create' | 'modify';
}

const Container = styled.div<ContainerStyles>`
  width: 680px;
  display: flex;
  justify-content: start;
  margin-bottom: 1.5em;

  button {
    height: 2em;
    &:nth-child(3) {
      display: ${(props) => (props.mode === 'create' ? 'block' : 'none')};
      ${rightSideOrangeButton}
    }
    &:last-child {
      display: ${(props) => (props.mode === 'modify' ? 'block' : 'none')};
      ${rightSideOrangeButton}
    }
  }

  button + button {
    margin-left: 1em;
  }

  @media only screen and (max-width: 720px) {
    width: 340px;
  }
`;
