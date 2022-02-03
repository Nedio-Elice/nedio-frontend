import styled, { css } from 'styled-components';

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

export default { InputField, InputTextField };

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
  padding: 0px 20px 0px 20px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: 8px 8px 16px rgba(221, 225, 233, 0.75);
  border-radius: 5px;
`;
