import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ToastProvider from '../components/Toast/ToastProvider';

jest.mock('react-redux');

type WrapperProps = {
  children: React.ReactNode;
};

describe('Navbar 테스트', () => {
  window.scrollTo = jest.fn();

  function Wrapper({ children }: WrapperProps) {
    return (
      <ToastProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </ToastProvider>
    );
  }

  it('Navbar가 제대로 렌더링 되었는가', async () => {
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

  it('Modal이 제대로 띄워지는가', async () => {
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
