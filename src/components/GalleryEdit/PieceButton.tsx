import styled from 'styled-components';

interface ButtonStyle {
  thumbnail: string | null;
}

interface Props {
  thumbnail: string | null;
  openModal: () => void;
}

const Button = styled.button<ButtonStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
  border-radius: 1em;
  padding: 0.3em;
  width: 50px;
  height: 50px;
  white-space: pre-wrap;
  background: rgba(242, 243, 245, 0.79);
  background-size: 100% 100%;
  background-image: ${(props) =>
    props.thumbnail ? `url(${props.thumbnail})` : 'none'};
  box-shadow: rgba(14, 30, 37, 0.12) 0px 1px 2px 0px,
    rgba(14, 30, 37, 0.32) 0px 1px 4px 0px;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
  transition: transform 0.3s ease-in-out;
  color: #e1e1e1;

  &:hover {
    transform: scale(1.1);
    color: #ff6e00;
  }
`;

function PieceButton({ openModal, thumbnail }: Props) {
  return (
    <Button type="button" onClick={openModal} thumbnail={thumbnail}>
      {thumbnail ? '' : '작품\n등록'}
    </Button>
  );
}

export default PieceButton;
