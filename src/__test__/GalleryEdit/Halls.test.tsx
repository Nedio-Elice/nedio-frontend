import { fireEvent, render } from '@testing-library/react';

import { HallInfo } from '../../types/GalleryEdit';
import { MOCK_HALLS } from '../../constants/state';

import Halls from '../../components/GalleryEdit/Halls';

jest.mock('react-redux');

describe('Halls', () => {
  const handleChangeHallName = jest.fn();
  const handleClickDeleteButton = jest.fn();
  const handleChangePieceField = jest.fn();
  const handleChangeNotification = jest.fn();
  const handleChangeHallTheme = jest.fn();

  function renderGalleryEdit(halls: HallInfo[] = MOCK_HALLS) {
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

    expect(MOCK_HALLS.length).toBe(2);
    expect(getAllByPlaceholderText('관명').length).toBe(2);
    expect(getAllByRole('button', { name: '배치도' }).length).toBe(2);
    expect(getAllByRole('button', { name: 'bin' }).length).toBe(2);
    expect(getAllByRole('option', { name: '테마 선택' }).length).toBe(2);
    expect(getAllByRole('button', { name: /작품/ }).length).toBe(20);
  });

  it('listens change events', () => {
    const { getAllByPlaceholderText, getAllByLabelText } = renderGalleryEdit();

    fireEvent.change(getAllByPlaceholderText('관명')[0], {
      target: { value: '1관' },
    });

    expect(handleChangeHallName).toBeCalledWith({ index: 0, value: '1관' });

    fireEvent.change(getAllByLabelText('theme')[0], {
      target: { value: 'Modern' },
    });

    expect(handleChangeHallTheme).toBeCalledWith({ index: 0, value: 'Modern' });
  });

  it('listens click events', () => {
    const { getAllByRole } = renderGalleryEdit();

    const deleteButton = getAllByRole('button', { name: 'bin' })[0];

    fireEvent.click(deleteButton);

    expect(handleClickDeleteButton).toBeCalled();

    const hallMap = getAllByRole('button', { name: '배치도' })[0];

    fireEvent.click(hallMap);

    expect(handleChangeNotification).toBeCalled();
  });
});
