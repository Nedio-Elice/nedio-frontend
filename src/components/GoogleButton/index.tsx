import styled from 'styled-components';
import { GoogleIcon } from '../../constants/icons';

interface Props {
  onClick: () => void;
  disabled: boolean | undefined;
}

function GoogleButton({ onClick, disabled }: Props) {
  return (
    <Container>
      <Button disabled={disabled} onClick={onClick}>
        <GoogleIcon width={35} height={35} />
      </Button>
    </Container>
  );
}

export default GoogleButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 7rem;
  height: 7rem;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #f2f3f5;
  box-shadow: 5px 5px 10px #e1e2e4, -5px -5px 10px #ffffff;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
