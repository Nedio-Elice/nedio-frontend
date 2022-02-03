import styled from 'styled-components';

interface Props {
  tapMenu: string;
}

function LoginLogoutButton({ tapMenu }: Props) {
  return <Button>{tapMenu}</Button>;
}

export default LoginLogoutButton;

const Button = styled.button`
  outline: none;
  border: none;
  width: 80px;
  height: 35px;
  border-radius: 25px;
  background: #f2f3f5;
  box-shadow: 5px 5px 10px #e1e2e4, -5px -5px 10px #ffffff;
  color: rgba(156, 156, 156, 0.48);
  font-size: 0.8rem;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.75);

  &:hover {
    cursor: pointer;
    box-shadow: 2.5px 2.5px 5px #e1e2e4, -2.5px -2.5px 5px #ffffff;
  }
`;
