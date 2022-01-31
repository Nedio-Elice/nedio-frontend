import { render } from '@testing-library/react';

import GalleryEdit from './index';

describe('GalleryEdit', () => {
  it('renders page title', () => {
    const { container } = render(<GalleryEdit />);

    expect(container).toHaveTextContent('GalleryEditPage');
  });

  it('renders poster upload interface', () => {
    const { getByLabelText } = render(<GalleryEdit />);

    expect(getByLabelText('포스터 업로드')).not.toBeNull();
  });
});
