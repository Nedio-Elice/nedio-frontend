import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ToastProvider from '../components/Toast/ToastProvider';

jest.mock('react-redux');

type WrapperProps = {
  children: React.ReactNode;
};

describe('Navbar', () => {
  window.scrollTo = jest.fn();

  function Wrapper({ children }: WrapperProps) {
    return (
      <ToastProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </ToastProvider>
    );
  }

  it('Navbar를 렌더링한다', async () => {
    const { getByTestId, getByText } = render(
      <ToastProvider>
        <MemoryRouter>
          <NavBar isSignIn signOut={() => {}} userId="12345" />
        </MemoryRouter>
      </ToastProvider>,
    );

    const navbar = getByTestId('navbar');
    const link = getByTestId('auth-button');

    await waitFor(() => {
      expect(getByText(/Nedio/i)).toBeInTheDocument();
      expect(navbar).toContainElement(link);
    });
  });

  it('로그인 버튼을 누르면 로그인모달을 띄운다', async () => {
    const { getByTestId, getByText } = render(
      <NavBar isSignIn={false} signOut={() => {}} userId={undefined} />,
      {
        wrapper: Wrapper,
      },
    );

    const link = getByTestId('auth-button');

    fireEvent.click(link);

    expect(getByText('Google 로그인')).toBeInTheDocument();
  });
});
