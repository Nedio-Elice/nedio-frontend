import { render } from '@testing-library/react';

import GalleryEdit from './index';

describe('GalleryEdit', () => {
  it('renders page title', () => {
    const { container } = render(<GalleryEdit />);

    expect(container).toHaveTextContent('GalleryEditPage');
  });
});
