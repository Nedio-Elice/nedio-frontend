import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root';

import { GalleryInfo, HallInfo } from '../../types/GalleryEdit';
import { MOCK_HALLS, MOCK_STATE } from '../../constants/state';

import GalleryEdit from '../../components/GalleryEdit';

jest.mock('react-redux');

describe('GalleryEdit', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (selector: (arg: RootState) => void) => selector(MOCK_STATE),
    );
  });

  const handleClickAddHallButton = jest.fn();
  const handleChangeHallName = jest.fn();
  const handleClickDeleteButton = jest.fn();
  const handleChangePieceField = jest.fn();
  const handleChangeGalleryInputField = jest.fn();
  const handleChangePosterUrl = jest.fn();
  const handleClickUpdateGallery = jest.fn();
  const handleChangeNotification = jest.fn();
  const handleChangeHallTheme = jest.fn();

  const initialGallery = {
    title: '',
    category: '',
    startDate: '',
    endDate: '',
    description: '',
    posterUrl: '',
  };

  function renderGalleryEdit(
    gallery: GalleryInfo = initialGallery,
    halls: HallInfo[] = MOCK_HALLS,
  ) {
    return render(
      <GalleryEdit
        gallery={gallery}
        halls={halls}
        notification=""
        mode="create"
        onChangeNotification={handleChangeNotification}
        onClickAddHallButton={handleClickAddHallButton}
        onChangeHallName={handleChangeHallName}
        onChangeHallTheme={handleChangeHallTheme}
        onClickDeleteHallButton={handleClickDeleteButton}
        onChangePieceField={handleChangePieceField}
        onChangeGalleryInputField={handleChangeGalleryInputField}
        onChangePosterUrl={handleChangePosterUrl}
        onClickUpdateGallery={handleClickUpdateGallery}
      />,
    );
  }

  it('renders poster upload interface', () => {
    const { getByLabelText } = renderGalleryEdit();

    expect(getByLabelText('Drag&Drop your poster here')).not.toBeNull();
  });

  it('renders input field', () => {
    const { getByLabelText } = renderGalleryEdit();

    expect(getByLabelText('??????')).toBeInTheDocument();
    expect(getByLabelText('??????')).toBeInTheDocument();
    expect(getByLabelText('??????')).toBeInTheDocument();
    expect(getByLabelText('??????')).toBeInTheDocument();
  });

  it('renders buttons', () => {
    const { getByRole } = renderGalleryEdit();

    expect(getByRole('button', { name: '????????? ??????' })).toBeInTheDocument();
    expect(getByRole('button', { name: '????????? ??????' })).toBeInTheDocument();
  });

  it('listens click events', () => {
    const { getByRole } = renderGalleryEdit();

    fireEvent.click(getByRole('button', { name: '????????? ??????' }));

    expect(handleClickAddHallButton).toBeCalled();

    fireEvent.click(getByRole('button', { name: '????????? ??????' }));

    expect(handleClickUpdateGallery).toBeCalled();
  });

  it('listens change events', () => {
    const { getByLabelText, getByTestId } = renderGalleryEdit();

    fireEvent.change(getByLabelText('??????'), {
      target: { value: 'title test' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'title',
      value: 'title test',
    });

    fireEvent.change(getByLabelText('??????'), {
      target: { value: '??????' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'category',
      value: '??????',
    });

    fireEvent.change(getByLabelText('??????'), {
      target: { value: 'description test' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'description',
      value: 'description test',
    });

    fireEvent.change(getByTestId('start-date'), {
      target: { value: '2022-02-20' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'startDate',
      value: '2022-02-20',
    });

    fireEvent.change(getByTestId('end-date'), {
      target: { value: '2022-02-25' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'endDate',
      value: '2022-02-25',
    });
  });
});
