import { fireEvent, render } from '@testing-library/react';

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

  it('renders inputs', () => {
    const { getByRole, getByTestId, getByLabelText } =
      renderGalleryEditContainer();

    expect(getByLabelText('Drag&Drop your poster here')).toBeInTheDocument();
    expect(getByRole('textbox', { name: '제목' })).toBeInTheDocument();
    expect(getByRole('combobox', { name: '분류' })).toBeInTheDocument();
    expect(getByRole('textbox', { name: '설명' })).toBeInTheDocument();
    expect(getByTestId('start-date')).toBeInTheDocument();
    expect(getByTestId('end-date')).toBeInTheDocument();
  });

  it('renders buttons', () => {
    const { getByRole } = renderGalleryEditContainer();

    expect(getByRole('button', { name: '전시관 추가' })).toBeInTheDocument();
    expect(getByRole('button', { name: '갤러리 생성' })).toBeInTheDocument();
  });

  it('listens change events', () => {
    const { getByRole, getByTestId, getByPlaceholderText, getByLabelText } =
      renderGalleryEditContainer();

    const title = getByRole('textbox', { name: '제목' });

    fireEvent.change(title, { target: { value: '가짜 제목' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeGalleryInput',
      payload: {
        name: 'title',
        value: '가짜 제목',
      },
    });

    const category = getByRole('combobox', { name: '분류' });

    fireEvent.change(category, { target: { value: '인물' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeGalleryInput',
      payload: {
        name: 'category',
        value: '인물',
      },
    });

    const startDate = getByTestId('start-date');

    fireEvent.change(startDate, { target: { value: '2022-02-20' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeGalleryInput',
      payload: {
        name: 'startDate',
        value: '2022-02-20',
      },
    });

    const endDate = getByTestId('end-date');

    fireEvent.change(endDate, { target: { value: '2022-02-27' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeGalleryInput',
      payload: {
        name: 'endDate',
        value: '2022-02-27',
      },
    });

    const description = getByRole('textbox', { name: '설명' });

    fireEvent.change(description, { target: { value: 'This is...' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeGalleryInput',
      payload: {
        name: 'description',
        value: 'This is...',
      },
    });

    const hallName = getByPlaceholderText('관명');

    fireEvent.change(hallName, { target: { value: '1관' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeHallName',
      payload: {
        index: 0,
        value: '1관',
      },
    });

    const hallTheme = getByLabelText('theme');

    fireEvent.change(hallTheme, { target: { value: 'Modern' } });

    expect(dispatch).toBeCalledWith({
      type: 'gallery/changeHallTheme',
      payload: {
        index: 0,
        value: 'Modern',
      },
    });
  });
  it('listens click event', () => {
    const { getByRole } = renderGalleryEditContainer();

    const addHallButton = getByRole('button', { name: '전시관 추가' });

    fireEvent.click(addHallButton);

    expect(dispatch).toBeCalledWith({
      type: 'gallery/addHall',
    });
  });
});
