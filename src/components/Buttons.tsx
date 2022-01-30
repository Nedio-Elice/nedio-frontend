import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  value: string;
  handleClick: (event: React.MouseEvent) => void;
}

function ButtonBasic({ value, handleClick }: ButtonProps) {
  return (
    <Button onClick={handleClick} orange={false}>
      {value}
    </Button>
  );
}

function ButtonOrange({ value, handleClick }: ButtonProps) {
  return (
    <Button onClick={handleClick} orange>
      {value}
    </Button>
  );
}

function ButtonNeumo({ value, handleClick }: ButtonProps) {
  return <ButtonLarge onClick={handleClick}>{value}</ButtonLarge>;
}

export default { ButtonBasic, ButtonOrange, ButtonNeumo };

const ButtonLarge = styled.button`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 43px;
  display: flex;
  text-align: center;
  color: #e1e1e1;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.75);
  align-items: center;
  justify-content: center;
  width: 207px;
  height: 60px;
  background: rgba(242, 243, 245, 0.79);
  box-shadow: -4px -4px 16px rgba(255, 255, 255, 0.25),
    4px 4px 16px rgba(218, 218, 218, 0.75);
  border-radius: 20px;
  border: none;

  &:hover {
    color: #ff6e00;
  }

  &:active {
    color: #ff6e00;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
  }
`;

const Button = styled.button<{ orange: boolean }>`
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

  ${(props) =>
    props.orange &&
    css`
      background: #ff6e00;
      box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.73),
        2px 8px 24px rgba(0, 0, 0, 0.25);
      color: #ffffff;
    `}

  &:hover {
    border: 2px solid #ff6e00;
    ${(props) =>
      props.orange &&
      css`
        border: none;
        box-shadow: none;
      `}
  }

  &:active {
    color: #ff6e00;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
    border: 0;
    ${(props) =>
      props.orange &&
      css`
        color: #ffffff;
        border: none;
        box-shadow: none;
        box-shadow: inset -3px -3px 7px #ff9545,
          inset 3px 3px 7px rgba(156, 156, 156, 0.78);
      `}
  }
`;
