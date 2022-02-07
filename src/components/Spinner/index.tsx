import styled, { keyframes } from 'styled-components';

function Spinner() {
  return (
    <BodyContainer>
      <Container />
    </BodyContainer>
  );
}

export default Spinner;

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
`;

const Container = styled.div`
  border: 12px solid #f3f3f3;
  border-top: 12px solid #ff6e00;
  animation: ${rotate} 1s linear infinite;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;
