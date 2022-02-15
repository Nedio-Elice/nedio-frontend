import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import video from '../assets/video/video.gif';
import { DEVICE } from '../constants/device';
import { PATH } from '../constants/path';

function LandingPage() {
  const navigation = useNavigate();

  const handleClick = () => navigation(PATH.MAIN);

  return (
    <Container>
      <Content>
        <FirstContent>
          <span>프로, 아마추어 모두 상관없이</span>
          <span>나만을 위한 온라인 3D 전시관</span>
          <span>Net + Studio = &quot;Nedio&ldquo;</span>
        </FirstContent>

        <LastContent>
          <span>오직 나만을 위한 스튜디오,</span>
          <span>Nedio</span>
          <span>
            <Button onClick={handleClick}>시작하기</Button>
          </span>
        </LastContent>
      </Content>
      <Video src={video} alt="Landing video" />
    </Container>
  );
}

export default LandingPage;

const Container = styled.div`
  font-family: cursive;
  color: white;
  height: 100vh;
  width: 100vw;
  background: rgba(33, 33, 33);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Content = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Loader = css`
  font-size: 45px;
  display: flex;
  flex-direction: column;

  @media ${DEVICE.TABLET} {
    font-size: 35px;
  }

  @media ${DEVICE.MOBILE} {
    font-size: 25px;
  }
`;

const firstContent = keyframes`
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    20% {
      transform: translateY(-50px);
      opacity: 1;
    }
    80% {
      transform: translateY(-50px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
`;

const lastContent = keyframes`
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      transform: translateY(-50px);
      opacity: 1;
    }
`;

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
`;

const FirstContent = styled.article`
  ${Loader}

  span {
    opacity: 0;
    animation-name: ${firstContent};
    animation-timing-function: ease;
    animation-duration: 3s;
    margin-bottom: 15px;
  }

  span {
    animation-delay: 0.6s;
  }

  span:first-child {
    animation-delay: 0.7s;
  }

  span:last-child {
    color: #ffe221;
    animation-delay: 0.5s;
  }
`;

const LastContent = styled.article`
  ${Loader}
  top: 0;
  position: absolute;

  span {
    animation-timing-function: ease;
    animation-duration: 3s;
    animation-name: ${lastContent};
    animation-fill-mode: backwards;
    margin-bottom: 15px;
  }

  span {
    animation-delay: 4.1s;
  }

  span:first-child {
    animation-delay: 4.2s;
  }

  span:last-child {
    animation-delay: 4s;
    color: #ffe221;
  }
`;

const Video = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;
  animation-delay: 4.1s;
  animation-name: ${fadeIn};
`;

const Button = styled.button`
  padding: 8px 15px;
  font-size: 1.2rem;
  background: transparent;
  border: 1px solid rgb(194, 194, 194);
  color: #ffe221;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.6s;
  text-align: center;

  &:hover {
    background: whitesmoke;
    border: 1px solid whitesmoke;
    color: rgb(92, 92, 92);
  }
`;
