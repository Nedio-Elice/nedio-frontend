import styled from 'styled-components';
import {
  leftSideSiverButton,
  rightSideOrangeButton,
} from '../../styles/mixins';

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
      <button type="button" onClick={handleClickUpdateGallery}>
        {mode === 'create' ? '갤러리 생성' : '갤러리 수정'}
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

    &:first-child {
      ${leftSideSiverButton}
    }

    &:last-child {
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
