import { render } from '@testing-library/react';

import GalleryEditPage from './GalleryEditPage';

describe('GalleryEditPage', () => {
  it('renders page title', () => {
    const { container } = render(<GalleryEditPage />);

    expect(container).toHaveTextContent('GalleryEditPage');
  });
});
