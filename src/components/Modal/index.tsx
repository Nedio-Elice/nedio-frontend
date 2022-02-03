import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

interface ModalHandle {
  show: () => void;
}

const SignInModal = React.forwardRef<ModalHandle, Props>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState(false);
  const modal = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    show() {
      setModalState(true);
    },
  }));

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (modalState) {
      setIsOpen(true);
    } else {
      timer = setTimeout(() => setIsOpen(false), 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [modalState]);

  const handleClick = (e: React.MouseEvent) => {
    if (!modal.current?.contains(e.target as Node)) {
      if (modalState) setModalState(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Background onClick={(e) => handleClick(e)}>
      <Container ref={modal} modalState={modalState}>
        <CloseBtn type="button" onClick={() => setModalState(false)}>
          &#10094;
        </CloseBtn>
        {props.children}
      </Container>
    </Background>
  );
});

export default SignInModal;

const slideUp = keyframes`
  0% {
    transform: translateY(120%);
  }
  100% {
    transform: none;
  }
`;

const slideDown = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translateY(120%);
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(77, 77, 77, 0.5);
`;

const Container = styled.div<{ modalState: boolean }>`
  position: relative;
  width: 350px;
  height: 350px;
  background: #e1e2e4;
  border-radius: 25px;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${slideUp};
  ${({ modalState }) =>
    !modalState &&
    css`
      animation-name: ${slideDown};
    `};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(133, 133, 133, 0.1);
    cursor: pointer;
  }
`;
