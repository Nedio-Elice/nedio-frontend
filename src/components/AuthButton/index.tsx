import styled from 'styled-components';
import { DEVICE } from '../../constants/device';

interface Props {
  tapMenu: string;
  handleClick: () => void;
}

function AuthButton({ tapMenu, handleClick }: Props) {
  return (
    <Button onClick={handleClick} data-testid="auth-button">
      {tapMenu}
    </Button>
  );
}

export default AuthButton;

const Button = styled.button`
  outline: none;
  border: none;
  width: 80px;
  height: 35px;
  border-radius: 25px;
  background: #f2f3f5;
  box-shadow: 5px 5px 10px #e1e2e4, -5px -5px 10px #ffffff;
  color: rgba(156, 156, 156, 0.8);
  font-size: 0.75rem;

  &:hover {
    cursor: pointer;
    box-shadow: 2.5px 2.5px 5px #e1e2e4, -2.5px -2.5px 5px #ffffff;
  }

  @media ${DEVICE.DESKTOP_LARGE} {
    width: 70px;
    font-size: 0.7rem;
  }
`;
