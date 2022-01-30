/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';

function CarouselButton({ isClicked, isLeft, onClick }) {
  return (
    <Button disabled={isClicked} isLeft={isLeft} onClick={onClick}>
      &#8680;
    </Button>
  );
}

export default CarouselButton;

const Button = styled.button`
  position: absolute;
  top: 0;
  z-index: 1000;
  background-color: black;
  width: 30px;
  height: 60px;
  opacity: 0.3;
  border-radius: 15px;
  color: white;

  ${({ isLeft }) =>
    isLeft
      ? css`
          left: 10px;
          transform: rotate(180deg);
        `
      : css`
          right: 10px;
        `}
`;
