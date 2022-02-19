import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root';

import { GalleryInfo, HallInfo } from '../../types/GalleryEdit';
import { MOCK_STATE } from '../../constants/state';

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

  const initialHalls = [
    {
      id: '1',
      hallName: '',
      hallTheme: '',
      imagesData: [],
    },
    {
      id: '2',
      hallName: '',
      hallTheme: '',
      imagesData: [],
    },
  ];

  function renderGalleryEdit(
    gallery: GalleryInfo = initialGallery,
    halls: HallInfo[] = initialHalls,
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

    expect(getByLabelText('제목')).toBeInTheDocument();
    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByLabelText('기간')).toBeInTheDocument();
    expect(getByLabelText('설명')).toBeInTheDocument();
  });

  it('renders buttons', () => {
    const { getByRole } = renderGalleryEdit();

    expect(getByRole('button', { name: '전시관 추가' })).toBeInTheDocument();
    expect(getByRole('button', { name: '갤러리 생성' })).toBeInTheDocument();
  });

  it('listens click events', () => {
    const { getByRole } = renderGalleryEdit();

    fireEvent.click(getByRole('button', { name: '전시관 추가' }));

    expect(handleClickAddHallButton).toBeCalled();

    fireEvent.click(getByRole('button', { name: '갤러리 생성' }));

    expect(handleClickUpdateGallery).toBeCalled();
  });

  it('listens change events', () => {
    const { getByLabelText } = renderGalleryEdit();

    fireEvent.change(getByLabelText('제목'), {
      target: { value: 'title test' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'title',
      value: 'title test',
    });

    fireEvent.change(getByLabelText('분류'), {
      target: { value: '자연' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'category',
      value: '자연',
    });

    fireEvent.change(getByLabelText('설명'), {
      target: { value: 'description test' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'description',
      value: 'description test',
    });

    fireEvent.change(getByLabelText('설명'), {
      target: { value: 'description test' },
    });

    expect(handleChangeGalleryInputField).toBeCalledWith({
      name: 'description',
      value: 'description test',
    });
  });
});
