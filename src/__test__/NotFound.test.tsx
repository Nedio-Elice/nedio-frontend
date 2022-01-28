import { render, screen } from '@testing-library/react';
import NotFoundPage from '../pages/NotFoundPage';

test('renders learn react link', () => {
  render(<NotFoundPage />);
  const linkElement = screen.getByText(/NotFoundPage/i);
  expect(linkElement).toBeInTheDocument();
});
