import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from '../pages/NotFoundPage';

test('renders learn react link', () => {
  const { container } = render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>,
  );
  expect(container).toHaveTextContent('아무것도 없네요!');
});
