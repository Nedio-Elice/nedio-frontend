import styled, { css } from 'styled-components';
import { ReactComponent as Cog } from '../../assets/icons/cog.svg';
import { ReactComponent as ReturnArrow } from '../../assets/icons/return.svg';
import { ReactComponent as TrashCan } from '../../assets/icons/trashcan.svg';

interface ButtonProps {
  className?: string;
  value: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: any;
}

interface EditButtonProps {
  value: string;
  handleClick?: any;
  edit: any;
}

interface TabButtonProps {
  className?: string;
  value: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: any;
  stay: boolean;
}

function ButtonBasic({ className, value, type, handleClick }: ButtonProps) {
  return (
    <Button onClick={handleClick} type={type} orange={false}>
      {value}
    </Button>
  );
}

function ButtonOrange({ className, value, type, handleClick }: ButtonProps) {
  return (
    <Button className={className} onClick={handleClick} type={type} orange>
      {value}
    </Button>
  );
}

function ButtonMini({ className, value, type, handleClick }: ButtonProps) {
  return (
    <ButtonSmall className={className} onClick={handleClick} type={type} orange>
      {value}
    </ButtonSmall>
  );
}

function ButtonNeumo({
  className,
  value,
  type,
  handleClick,
  stay,
}: TabButtonProps) {
  return (
    <ButtonLarge
      className={className}
      onClick={handleClick}
      type={type}
      stay={stay}
    >
      {value}
    </ButtonLarge>
  );
}

function ButtonEdit({ value, handleClick, edit }: EditButtonProps) {
  return (
    <ButtonCog onClick={handleClick}>
      {edit === false ? (
        <Cog width="24" height="24" opacity="0.4" />
      ) : (
        <ReturnArrow width="24" height="24" opacity="0.4" />
      )}
    </ButtonCog>
  );
}

function ButtonDelete({ className, value, type, handleClick }: ButtonProps) {
  return (
    <ButtonBin onClick={handleClick} type={type}>
      <TrashCan width="24" height="24" opacity="0.4" />
    </ButtonBin>
  );
}

ButtonBasic.defaultProps = {
  className: '',
  type: 'button',
  handleClick: () => {},
};
ButtonOrange.defaultProps = {
  className: '',
  type: 'button',
  handleClick: () => {},
};
ButtonMini.defaultProps = {
  className: '',
  type: 'button',
  handleClick: () => {},
};
ButtonNeumo.defaultProps = {
  className: '',
  type: 'button',
  handleClick: () => {},
};
ButtonEdit.defaultProps = {
  handleClick: () => {},
};
ButtonDelete.defaultProps = {
  className: '',
  type: 'button',
  handleClick: () => {},
};

export default {
  ButtonBasic,
  ButtonOrange,
  ButtonNeumo,
  ButtonMini,
  ButtonEdit,
  ButtonDelete,
};

const ButtonLarge = styled.button<{ stay: boolean }>`
  font-family: Pretendard-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4em;
  line-height: 43px;
  display: flex;
  text-align: center;
  color: rgba(156, 156, 156, 0.8);
  align-items: center;
  justify-content: center;
  width: 12vw;
  max-width: 200px;
  min-width: 144px;
  height: 60px;
  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #fdfdfd,
    #fafafb,
    #f8f8f9,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f8f8f9,
    #fafafb,
    #fdfdfd,
    #ffffff
  );
  box-shadow: -4px -4px 16px rgba(255, 255, 255, 0.25),
    4px 4px 16px rgba(218, 218, 218, 0.75);
  border-radius: 20px;
  border: none;

  &:hover {
    color: #f3643f;
    cursor: pointer;
  }

  &:active {
    color: ##f3643f;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
  }

  @media (max-width: 1100px) {
    display: block;
  }

  ${(props) =>
    props.stay &&
    css`
      color: #f3643f;
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
  height: 44px;
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
      background: #f3643f;
      box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.73),
        2px 8px 24px rgba(0, 0, 0, 0.25);
      color: #ffffff;
    `}

  &:hover {
    height: 44px;
    border: 2px solid #f3643f;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 10px;
    cursor: pointer;
    ${(props) =>
      props.orange &&
      css`
        box-shadow: none;
      `}
  }

  &:active {
    color: #f3643f;
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
  height: 24px;
  min-width: 80px;
  padding: 2px 12px;
  text-align: center;
  margin-top: 8px;
  margin-left: auto;
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
      background: #f3643f;
      box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.73),
        2px 8px 24px rgba(0, 0, 0, 0.25);
      color: #ffffff;
    `}

  &:hover {
    height: 24px;
    border: 2px solid #f3643f;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 10px;
    cursor: pointer;
    ${(props) =>
      props.orange &&
      css`
        box-shadow: none;
      `}
  }

  &:active {
    color: #f3643f;
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

const ButtonCog = styled.button`
  display: inline-block;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: center;
  color: #777777;
  border: none;
  background-color: transparent;
  height: 24px;
  width: 24px;

  text-align: center;
  margin-left: auto;
  margin-right: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonBin = styled.button`
  display: inline-block;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: center;
  color: #777777;
  border: none;
  background-color: transparent;
  height: 24px;
  width: 24px;

  text-align: center;
  margin-right: 8px;
  &:hover {
    cursor: pointer;
  }
`;
