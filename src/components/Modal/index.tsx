import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface Props {
  width: number;
  height: number;
  children: React.ReactNode;
}

interface ModalHandle {
  show: () => void;
}

const Modal = React.forwardRef<ModalHandle, Props>(
  ({ width, height, children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalState, setModalState] = useState(false);
    const modal = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      show() {
        document.body.style.overflow = 'hidden';
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
        if (modalState) document.body.style.overflow = 'auto';
      };
    }, [modalState]);

    const closeModal = () => {
      document.body.style.overflow = 'auto';
      setModalState(false);
    };

    const handleClick = (e: React.MouseEvent) => {
      if (!modal.current?.contains(e.target as Node)) {
        if (modalState) closeModal();
      }
    };

    if (!isOpen) return null;

    return (
      <Background onClick={(e) => handleClick(e)}>
        <Container
          ref={modal}
          modalState={modalState}
          modalWidth={width}
          modalHeight={height}
        >
          <CloseBtn type="button" onClick={closeModal}>
            &#10094;
          </CloseBtn>
          {children}
        </Container>
      </Background>
    );
  },
);

export default Modal;

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

const Container = styled.div<{
  modalState: boolean;
  modalWidth: number;
  modalHeight: number;
}>`
  position: relative;
  width: ${({ modalWidth }) => `${modalWidth}px`};
  height: ${({ modalHeight }) => `${modalHeight}px`};
  background: #f2f3f5;
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
