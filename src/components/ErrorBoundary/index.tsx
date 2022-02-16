/* eslint-disable react/state-in-constructor */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import NoResult from '../NoResult';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <NoResult title="Three.js에서 오류가 발생했습니다" isHall />;
    }

    return children;
  }
}

export default ErrorBoundary;
