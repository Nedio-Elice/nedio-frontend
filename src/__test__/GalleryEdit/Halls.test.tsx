import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/root';

import { HallInfo } from '../../types/GalleryEdit';
import { MOCK_STATE } from '../../constants/state';

import Halls from '../../components/GalleryEdit/Halls';

jest.mock('react-redux');

describe('Halls', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    (useDispatch as jest.Mock).mockImplementation(() => dispatch);

    (useSelector as jest.Mock).mockImplementation(
      (selector: (arg: RootState) => void) => selector(MOCK_STATE),
    );
  });

  const handleChangeHallName = jest.fn();
  const handleClickDeleteButton = jest.fn();
  const handleChangePieceField = jest.fn();
  const handleChangeNotification = jest.fn();
  const handleChangeHallTheme = jest.fn();

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

  function renderGalleryEdit(halls: HallInfo[] = initialHalls) {
    return render(
      <Halls
        halls={halls}
        onChangeNotification={handleChangeNotification}
        onChangeHallName={handleChangeHallName}
        onChangeHallTheme={handleChangeHallTheme}
        onClickDeleteHallButton={handleClickDeleteButton}
        onChangePieceField={handleChangePieceField}
      />,
    );
  }

  it('renders hall upload interface', () => {
    const { getAllByPlaceholderText, getAllByRole } = renderGalleryEdit();

    expect(getAllByPlaceholderText('관명').length).toBe(2);
    expect(getAllByRole('button', { name: '배치도' }).length).toBe(2);
    expect(getAllByRole('button', { name: 'bin' }).length).toBe(2);
  });
});
