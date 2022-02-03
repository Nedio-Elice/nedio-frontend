import styled from 'styled-components';

interface InputProps {
  defaultText: string;
}

function InputField({ defaultText }: InputProps) {
  return <InputBox type="input" placeholder={defaultText} />;
}

export default InputField;

const InputBox = styled.input`
  font-family: Pretendard;
  font-style: normal;
  font-size: 16px;
  width: 576px;
  height: 40px;
  background: #ffffff;
  padding: 0px 20px 0px 20px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: 8px 8px 16px rgba(221, 225, 233, 0.75);
  border-radius: 5px;
`;
