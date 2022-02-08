import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { notFound } from '../constants/images';
import { PATH } from '../constants/path';

function NotFoundPage() {
  const navigation = useNavigate();
  const handleClick = () => navigation(`${PATH.MAIN}`, { replace: true });

  return (
    <Container>
      <NotFound src={notFound} />
      <NotFoundTitle>아무것도 없네요!</NotFoundTitle>
      <GotoButton onClick={handleClick}>홈으로</GotoButton>
    </Container>
  );
}

export default NotFoundPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
`;

const NotFound = styled.img`
  width: 650px;
  height: 650px;

  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

const NotFoundTitle = styled.h2`
  position: relative;
  top: -35px;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: -10px;
  }
`;

const GotoButton = styled.button`
  padding: 15px 25px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: #1f3e5a;
  color: white;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
