import styled from 'styled-components';
import { flexCenter, hoverOrange, posterShadow } from '../../styles/mixins';

import { defaultPoster } from '../../constants/images';

interface Props {
  thumbnail: string | null;
  openModal: () => void;
}

function PieceButton({ openModal, thumbnail }: Props) {
  return (
    <Button type="button" onClick={openModal} thumbnail={thumbnail}>
      {thumbnail ? '' : '작품\n등록'}
    </Button>
  );
}

export default PieceButton;

interface ButtonStyle {
  thumbnail: string | null;
}

const Button = styled.button<ButtonStyle>`
  ${flexCenter}
  margin-right: 1em;
  padding: 0.3em;
  width: 50px;
  height: 50px;
  white-space: pre-wrap;

  background-size: 100% 100%;
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : `url(${defaultPoster})`};

  ${posterShadow}

  transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  ${hoverOrange}
`;
