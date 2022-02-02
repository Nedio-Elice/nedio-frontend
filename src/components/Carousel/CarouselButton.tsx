import styled, { css } from 'styled-components';

interface Props {
  isClicked: boolean;
  isLeft: boolean;
  onClick: () => void;
}

function CarouselButton({ isClicked, isLeft, onClick }: Props) {
  const arrowIcon = isLeft ? (
    <Button disabled={isClicked} isLeft={isLeft} onClick={onClick}>
      &#10094;
    </Button>
  ) : (
    <Button disabled={isClicked} isLeft={isLeft} onClick={onClick}>
      &#10095;
    </Button>
  );

  return arrowIcon;
}

export default CarouselButton;

const Button = styled.button<{ isLeft: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-70%);
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
        `
      : css`
          right: 15px;
        `}
`;
