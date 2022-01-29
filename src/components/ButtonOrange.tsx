import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #777777;
  width: 96px;
  border: none;
  height: 40px;
  text-align: center;
  background: linear-gradient(
    134.47deg,
    #ffffff 36.25%,
    #d1d1d1 230.69%,
    rgba(242, 242, 244, 0) 230.72%
  );
  box-shadow: inset 2px 2px 0px #ffffff;
  filter: drop-shadow(2px 8px 24px rgba(0, 0, 0, 0.12));
  border-radius: 4px;

  &:hover {
    border: 2px solid #ff6e00;
  }

  &:active {
    color: #ff6e00;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
    border: 0;
  }
`;

interface ButtonProps {
  value: string;
  handleClick: (event: React.MouseEvent) => void;
}

const ButtonOrange: React.FC<ButtonProps> = function ButtonOrange({
  value,
  handleClick,
}) {
  return (
    <div>
      <Button type="submit" onClick={handleClick}>
        {value}
      </Button>
    </div>
  );
};

export default ButtonOrange;
