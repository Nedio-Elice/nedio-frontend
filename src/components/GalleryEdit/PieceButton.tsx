import styled from 'styled-components';

interface ButtonStyle {
  thumbnail: string | null;
}

interface Props {
  thumbnail: string | null;
  openModal: () => void;
}

const Button = styled.button<ButtonStyle>`
  width: 50px;
  height: 50px;
  margin-right: 1em;
  padding: 0.3em;
  background: none;
  border-radius: 0.5em;
  cursor: pointer;
  white-space: pre-wrap;
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : 'none'};
  background-size: 100% 100%;
`;

function PieceButton({ openModal, thumbnail }: Props) {
  return (
    <Button type="button" onClick={openModal} thumbnail={thumbnail}>
      {thumbnail ? '' : '작품\n등록'}
    </Button>
  );
}

export default PieceButton;
