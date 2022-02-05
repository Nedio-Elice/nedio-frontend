import { render } from '@testing-library/react';

import GalleryEditContainer from './index';

describe('GalleryEditContainer', () => {
  it('renders buttons for this page', () => {
    const { container } = render(<GalleryEditContainer />);

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('미리보기');
    expect(container).toHaveTextContent('갤러리 생성');
  });
});
