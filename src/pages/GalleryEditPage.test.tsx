import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { MOCK_STATE } from '../constants/state';

import GalleryEditPage from './GalleryEditPage';

import { RootState } from '../store/root';

jest.mock('react-redux');

describe('GalleryEditPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (selector: (arg: RootState) => void) => selector(MOCK_STATE),
    );
  });

  function renderGalleryEditPage() {
    return render(
      <MemoryRouter>
        <GalleryEditPage />
      </MemoryRouter>,
    );
  }

  it('renders buttons for this page', () => {
    // mockState(GALLERY_STATE);

    const { container } = renderGalleryEditPage();

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('갤러리 생성');
  });
});
