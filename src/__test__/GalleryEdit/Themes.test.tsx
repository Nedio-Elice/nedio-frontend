import { fireEvent, render } from '@testing-library/react';

import Themes from '../../components/GalleryEdit/Themes';

describe('Themes', () => {
  const handleChange = jest.fn();

  it('renders value', () => {
    const { getByLabelText } = render(
      <Themes
        theme="Modern"
        label="theme"
        hallIndex={0}
        onChangeHallTheme={handleChange}
      />,
    );

    expect(getByLabelText('theme')).toHaveValue('Modern');
  });

  it('listens change event', () => {
    const { getByLabelText } = render(
      <Themes
        theme="Modern"
        label="theme"
        hallIndex={0}
        onChangeHallTheme={handleChange}
      />,
    );

    fireEvent.change(getByLabelText('theme'), { target: { value: 'Jazz' } });

    expect(handleChange).toBeCalledWith({
      index: 0,
      value: 'Jazz',
    });
  });
});
