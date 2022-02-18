import { render } from '@testing-library/react';

import * as reactRedux from 'react-redux';

import { GalleryInfo, HallInfo } from '../../types/GalleryEdit';

import GalleryEdit from '../../components/GalleryEdit';

describe('GalleryEdit', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

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
