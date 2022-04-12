import { fireEvent, render } from '@testing-library/react';

import Title from '../../components/GalleryEdit/Title';

describe('Title', () => {
  const handleChange = jest.fn();

  it('renders title field', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <Title
        label="제목"
        title="엘리스 사진전"
        placeholder="제목을 입력해주세요"
        onChange={handleChange}
      />,
    );

    const titleInput = getByLabelText('제목');

    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveValue('엘리스 사진전');
    expect(getByPlaceholderText('제목을 입력해주세요')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <Title
        label="제목"
        title="엘리스 사진전"
        placeholder="제목을 입력해주세요"
        onChange={handleChange}
      />,
    );

    const titleInput = getByLabelText('제목');

    fireEvent.change(titleInput, { target: { value: '스리엘 사진전' } });

    expect(handleChange).toBeCalledWith({
      name: 'title',
      value: '스리엘 사진전',
    });
  });
});
