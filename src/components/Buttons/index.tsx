import { AsyncThunkAction } from '@reduxjs/toolkit';
import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  value: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: any;
}

interface TabButtonProps {
  value: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: any;
  stay: boolean;
}

function ButtonBasic({ value, type, handleClick }: ButtonProps) {
  return (
    <Button onClick={handleClick} type={type} orange={false}>
      {value}
    </Button>
  );
}

function ButtonOrange({ value, type, handleClick }: ButtonProps) {
  return (
    <Button onClick={handleClick} type={type} orange>
      {value}
    </Button>
  );
}

function ButtonMini({ value, type, handleClick }: ButtonProps) {
  return (
    <ButtonSmall onClick={handleClick} type={type} orange>
      {value}
    </ButtonSmall>
  );
}

function ButtonNeumo({ value, type, handleClick, stay }: TabButtonProps) {
  return (
    <ButtonLarge onClick={handleClick} type={type} stay={stay}>
      {value}
    </ButtonLarge>
  );
}

function ButtonEdit({ value, type, handleClick }: ButtonProps) {
  return (
    <ButtonMedium onClick={handleClick} type={type}>
      {value}
    </ButtonMedium>
  );
}

ButtonBasic.defaultProps = {
  type: 'button',
  handleClick: () => {},
};
ButtonOrange.defaultProps = {
  type: 'button',
  handleClick: () => {},
};
ButtonMini.defaultProps = {
  type: 'button',
  handleClick: () => {},
};
ButtonNeumo.defaultProps = {
  type: 'button',
  handleClick: () => {},
};
ButtonEdit.defaultProps = {
  type: 'button',
  handleClick: () => {},
};

export default {
  ButtonBasic,
  ButtonOrange,
  ButtonNeumo,
  ButtonMini,
  ButtonEdit,
};

const ButtonLarge = styled.button<{ stay: boolean }>`
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

  ${(props) =>
    props.stay &&
    css`
      color: #ff6e00;
    `}
`;

const Button = styled.button<{ orange: boolean }>`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #777777;
  border: none;
  height: 40px;
  min-width: 80px;
  padding: 2px 12px;
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
    height: 40px;
    border: 2px solid #ff6e00;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 10px;
    ${(props) =>
      props.orange &&
      css`
        box-shadow: none;
      `}
  }

  &:active {
    color: #ff6e00;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
    border: 0;
    padding: 2px 12px;
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

const ButtonSmall = styled.button<{ orange: boolean }>`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #777777;
  border: none;
  height: 20px;
  padding: 2px 12px;
  text-align: center;
  margin-top: 8px;
  margin-left: 80%;
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
    height: 20px;
    border: 2px solid #ff6e00;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 10px;
    ${(props) =>
      props.orange &&
      css`
        box-shadow: none;
      `}
  }

  &:active {
    color: #ff6e00;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
    border: 0;
    padding: 2px 12px;
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

const ButtonMedium = styled.button`
  display: block;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: #777777;
  border: none;
  background-color: transparent;
  height: 24px;
  width: 60px;
  padding: 0px 12px;
  text-align: center;
  margin-left: auto;
  &:hover {
    color: #ff6e00;
  }
`;
