import { fireEvent, render } from '@testing-library/react';

import Buttons from '../../components/GalleryEdit/Buttons';

describe('Buttons', () => {
  const handleClickAddHallButton = jest.fn();
  const handleClickUpdateGallery = jest.fn();

  const renderButtons = (mode: 'create' | 'modify') => {
    return render(
      <Buttons
        mode={mode}
        onClickAddHallButton={handleClickAddHallButton}
        onClickUpdateGallery={handleClickUpdateGallery}
      />,
    );
  };

  it('renders buttons', () => {
    const { getByText } = renderButtons('create');

    expect(getByText('전시관 추가')).toBeInTheDocument();
    expect(getByText('갤러리 생성')).toBeInTheDocument();
  });

  it('renders "갤러리 수정" button on modify mode', () => {
    const { getByText, queryByText } = renderButtons('modify');

    expect(getByText('갤러리 수정')).toBeInTheDocument();
    expect(queryByText('갤러리 생성')).not.toBeInTheDocument();
  });

  it('listens click events', () => {
    const { getByText } = renderButtons('create');

    fireEvent.click(getByText('전시관 추가'));
    expect(handleClickAddHallButton).toHaveBeenCalled();

    fireEvent.click(getByText('갤러리 생성'));
    expect(handleClickUpdateGallery).toHaveBeenCalled();
  });
});
