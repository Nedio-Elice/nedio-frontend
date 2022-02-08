import styled, { css } from 'styled-components';

type LabelProps = React.ComponentPropsWithoutRef<'input'>;

interface InputProps {
  defaultText?: string;
  value?: string;
  width?: string;
  height?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputTextProps {
  defaultText?: string;
  value?: string;
  width?: string;
  height?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface InputImgProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  defaultText,
  value,
  width,
  height,
  onChange,
}: InputProps) {
  return (
    <InputBox
      type="input"
      placeholder={defaultText}
      width={width}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

function InputTextField({
  defaultText,
  value,
  width,
  height,
  onChange,
}: InputTextProps) {
  return (
    <InputTextBox
      placeholder={defaultText}
      width={width}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
}

function InputProfile({ onChange }: InputImgProps) {
  return <InputImage type="file" onChange={onChange} />;
}

function InputProfileLabel({ children }: LabelProps) {
  return <Label>{children}</Label>;
}

InputField.defaultProps = {
  defaultText: '',
  width: '576px',
  height: '40px',
  value: '',
  onChange: () => {},
};

InputTextField.defaultProps = {
  defaultText: '',
  width: '576px',
  height: '40px',
  value: '',
  onChange: () => {},
};

export default { InputField, InputTextField, InputProfile, InputProfileLabel };

const InputBox = styled.input<{
  width: string | undefined;
  height: string | undefined;
}>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  font-family: Pretendard;
  font-style: normal;
  font-size: 16px;
  background: #ffffff;
  padding: 0px 20px 0px 20px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: 8px 8px 16px rgba(221, 225, 233, 0.75);
  border-radius: 5px;

  &::placeholder {
    font-family: 'Pretendard-Regular';
    opacity: 0.6;
  }
  &:focus {
    border: 1px solid #ff6e00;
    outline: none;
  }
`;

const InputTextBox = styled.textarea<{
  width: string | undefined;
  height: string | undefined;
}>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  font-family: Pretendard;
  font-style: normal;
  font-size: 16px;
  background: #ffffff;
  padding: 12px 16px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: inset 2px 2px 0px #ffffff;
  filter: drop-shadow(2px 8px 24px rgba(0, 0, 0, 0.12));
  border-radius: 5px;

  &::placeholder {
    font-family: 'Pretendard-Regular';
    opacity: 0.6;
  }

  &:focus {
    border: 1px solid #ff6e00;
    outline: none;
  }
`;

const InputImage = styled.input`
  display: none;
`;

const Label = styled.label`
  display: inline-block;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #777777;
  border: none;
  height: 40px;
  line-height: 40px;
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

  &:hover {
    height: 40px;
    border: 2px solid #ff6e00;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 10px;
  }

  &:active {
    color: #ff6e00;
    box-shadow: inset -3px -3px 7px #ffffff,
      inset 3px 3px 7px rgba(156, 156, 156, 0.48);
    border: 0;
    padding: 2px 12px;
  }
`;
