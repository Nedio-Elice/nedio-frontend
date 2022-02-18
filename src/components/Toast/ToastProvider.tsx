/* eslint-disable react/jsx-props-no-spreading */
import { createContext, useCallback, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import CreateToastPortal from './CreateToastPortal';
import ToastComponent from './Toast';

export interface Toast {
  title: string;
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

interface Props {
  children: React.ReactNode;
}

export interface ToastState extends Toast {
  id: string;
}

export const toastContext = createContext<((toast: Toast) => void) | null>(
  null,
);

function ToastProvider({ children }: Props) {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const createToast = useCallback((toast: Toast) => {
    setToasts((prevToasts) => [...prevToasts, { id: nanoid(), ...toast }]);
  }, []);

  const hideToast = (toastId: string) => {
    setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
  };

  return (
    <toastContext.Provider value={createToast}>
      <CreateToastPortal>
        <Container>
          {toasts.map((toast) => (
            <ToastComponent key={toast.id} hideToast={hideToast} {...toast} />
          ))}
        </Container>
      </CreateToastPortal>
      {children}
    </toastContext.Provider>
  );
}

export default ToastProvider;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 99999;
`;

// 사용방법
// hook 호출
// const toast = useToast();
// // 사용하시고 싶은 부분에서
// 방법 1
// toast({
//   title: '제목 작성란',
//   message: '내용 작성란',
// });

// 방법 2 추가 옵션  duration, type
// default 값 duration = 5000 = 5초, type = 'success'
// duration은 ms 단위
// type 종류는 'success' | 'error' | 'info'
// toast({
//   title: '제목 작성란',
//   message: '내용 작성란',
//   type: 'info',
//   duration: 8000,
// });

// 적용 예시
// src/containers/signInCotainer
