import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DEVICE } from '../constants/device';
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
  width: 100%;
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
  width: 550px;
  height: 550px;

  @media ${DEVICE.TABLET} {
    width: 350px;
    height: 350px;
  }
`;

const NotFoundTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 10px 0;

  @media ${DEVICE.TABLET} {
    font-size: 1rem;
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
