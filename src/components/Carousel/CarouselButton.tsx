import styled, { css } from 'styled-components';

interface Props {
  isClicked: boolean;
  isLeft: boolean;
  onClick: () => void;
}

function CarouselButton({ isClicked, isLeft, onClick }: Props) {
  return (
    <Button disabled={isClicked} isLeft={isLeft} onClick={onClick}>
      &#10095;
    </Button>
  );
}

export default CarouselButton;

const Button = styled.button<{ isLeft: boolean }>`
  position: absolute;
  top: 100px;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.5);
  width: 30px;
  height: 60px;
  opacity: 0.8;
  border-radius: 15px;
  color: white;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  ${({ isLeft }) =>
    isLeft
      ? css`
          left: 15px;
          transform: rotate(180deg);
        `
      : css`
          right: 15px;
        `}
`;
