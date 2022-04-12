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
  top: 45px;
  right: 0;
  width: 300px;
  z-index: 99999;
`;
