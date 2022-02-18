import { render } from '@testing-library/react';

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
});
