import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { MOCK_STATE } from '../../constants/state';

import GalleryEditContainer from '../../containers/GalleryEditContainer';

import { RootState } from '../../store/root';

jest.mock('react-redux');

describe('GalleryEditContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (selector: (arg: RootState) => void) => selector(MOCK_STATE),
    );
  });

  function renderGalleryEditContainer() {
    return render(
      <MemoryRouter>
        <GalleryEditContainer />
      </MemoryRouter>,
    );
  }

  it('renders buttons for this page', () => {
    const { container } = renderGalleryEditContainer();

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('갤러리 생성');
  });
});
