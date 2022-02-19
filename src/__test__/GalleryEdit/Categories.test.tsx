import { fireEvent, render } from '@testing-library/react';

import Categories from '../../components/GalleryEdit/Categories';

describe('Categories', () => {
  const handleChange = jest.fn();

  it('renders category options', () => {
    const { getByLabelText, getAllByRole } = render(
      <Categories category="" onChange={handleChange} />,
    );

    expect(getByLabelText('분류')).toHaveValue('');
    expect(getAllByRole('option').length).toBe(9);
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <Categories category="" onChange={handleChange} />,
    );

    fireEvent.change(getByLabelText('분류'), { target: { value: '저널리즘' } });

    expect(handleChange).toBeCalledWith({
      name: 'category',
      value: '저널리즘',
    });
  });
});
