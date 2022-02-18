import styled, { css, keyframes } from 'styled-components';
import { XIcon } from '../../constants/icons';

interface Props {
  id: string;
  title: string;
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info';
  hideToast: (id: string) => void;
}

function Toast({
  id,
  title,
  message,
  duration = 5000,
  type = 'success',
  hideToast,
}: Props) {
  const handleAnimationEnd = () => {
    hideToast(id);
  };

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    hideToast(id);
  };

  return (
    <Container type={type} duration={duration} role="alert">
      <Body>
        <Contents>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Contents>
        <XIcon onClick={handleClick} />
      </Body>
      <Progress duration={duration} onAnimationEnd={handleAnimationEnd} />
    </Container>
  );
}

export default Toast;

const toastProgress = keyframes`
  to {
    width: 0;
  }
`;

const toastContainer = keyframes`
  0% {
    opacity: 0.9;
  }
  20% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.75);
  }
`;

const infoToastStyle = css`
  background-color: #084298;
  color: white;
`;

const successToastStyle = css`
  background-color: #61c23a;
  color: white;
`;

const errorToastStyle = css`
  background-color: #da4347;
  color: white;
`;

const Container = styled.div<{
  type: 'success' | 'error' | 'info';
  duration: number;
}>`
  position: relative;
  border-radius: 5px;
  margin: 15px;
  transition: all 1s;
  transform: translateY(25%);
  overflow: hidden;
  color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  ${({ type }) => {
    const style = {
      success: successToastStyle,
      error: errorToastStyle,
      info: infoToastStyle,
    };
    return style[type];
  }}

  ${({ duration }) => css`
    animation: ${toastContainer} ease-in-out ${duration / 1000}s;
  `};
`;

const Body = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg path {
    fill: white;

    :hover {
      cursor: pointer;
    }
  }
`;

const Contents = styled.div``;

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 2px;
`;

const Message = styled.p`
  font-size: 0.8rem;
`;

const Progress = styled.div<{
  duration: number;
}>`
  width: 100%;
  height: 4px;
  background-color: white;

  ${({ duration }) => css`
    animation: ${toastProgress} linear ${duration / 1000}s;
  `};
`;
