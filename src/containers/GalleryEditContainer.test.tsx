import { render } from '@testing-library/react';

import GalleryEditContainer from './GalleryEditContainer';

describe('GalleryEditContainer', () => {
  it('renders page title', () => {
    const { container } = render(<GalleryEditContainer />);

    expect(container).toHaveTextContent('GalleryEditPage');
  });
});
