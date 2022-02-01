import { render, fireEvent } from '@testing-library/react';

import GalleryEdit from './index';

describe('GalleryEdit', () => {
  const handleClickAddHallButton = jest.fn();

  it('renders poster upload interface', () => {
    const { getByLabelText } = render(
      <GalleryEdit
        halls={[]}
        onClickAddHallButton={handleClickAddHallButton}
      />,
    );

    expect(getByLabelText('포스터 업로드')).not.toBeNull();
  });

  it('renders poster upload interface', () => {
    const { getByLabelText } = render(
      <GalleryEdit
        halls={[]}
        onClickAddHallButton={handleClickAddHallButton}
      />,
    );

    expect(getByLabelText('포스터 업로드')).not.toBeNull();
  });

  it('renders gallery upload interfaces', () => {
    const { getByLabelText } = render(
      <GalleryEdit
        halls={[]}
        onClickAddHallButton={handleClickAddHallButton}
      />,
    );

    expect(getByLabelText('제목')).not.toBeNull();
    expect(getByLabelText('분류')).not.toBeNull();
    expect(getByLabelText('기간')).not.toBeNull();
    expect(getByLabelText('설명')).not.toBeNull();
  });

  it('renders buttons for this page', () => {
    const { container } = render(
      <GalleryEdit
        halls={[]}
        onClickAddHallButton={handleClickAddHallButton}
      />,
    );

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('미리보기');
    expect(container).toHaveTextContent('갤러리 생성');
  });

  it('listens click event on "전시관 추가" button', () => {
    const { getByText } = render(
      <GalleryEdit
        halls={[]}
        onClickAddHallButton={handleClickAddHallButton}
      />,
    );

    fireEvent.click(getByText('전시관 추가'));

    expect(handleClickAddHallButton).toBeCalled();
  });

  it('renders "작품등록" buttons', () => {
    const mockHalls = [
      {
        id: 1,
        name: '1관',
      },
      {
        id: 2,
        name: '2관',
      },
    ];

    const { container, getByText } = render(
      <GalleryEdit
        halls={mockHalls}
        onClickAddHallButton={handleClickAddHallButton}
      />,
    );

    mockHalls.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });

    expect(container).toHaveTextContent('작품등록');
  });
});
