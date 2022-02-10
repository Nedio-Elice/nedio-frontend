import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { keyboard, position, question } from '../../../constants/icons';
import usePointerLock from '../../../hooks/usePointerLock';

function Landing() {
  const [isShow, setIsShow] = useState(true);
  const isPointerLock = usePointerLock();

  const navigation = useNavigate();

  const handleClick = () => navigation(-1);
  useEffect(() => {
    setIsShow(!isPointerLock);
  }, [isPointerLock]);

  if (!isShow) return null;
  return (
    <Container>
      <CloseBtn type="button" onClick={handleClick}>
        &#10094;
      </CloseBtn>
      <Title>클릭하여 시작하세요</Title>
      <Helper>
        <KeyboardIcon src={keyboard} />
        <Content>방향키를 사용해 움직여보세요</Content>
        <PostionIcon src={position} />
        <Content>마우스를 움직여 주의를 둘러보세요</Content>
        <QuestionIcon src={question} />
        <Content>ESC</Content>
      </Helper>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(77, 77, 77, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  font-size: 1.1rem;
  line-height: 26px;
  cursor: pointer;
  z-index: 9990;
`;

const Title = styled.h3`
  font-size: 2rem;
`;

const Content = styled.p`
  margin: 0 5px;
`;

const KeyboardIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const PostionIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const QuestionIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const Helper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5%;
`;

const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  &:hover {
    background: rgba(133, 133, 133, 0.1);
    cursor: pointer;
  }
`;
