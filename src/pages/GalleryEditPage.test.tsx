import { render } from '@testing-library/react';

import GalleryEditPage from './GalleryEditPage';

describe('GalleryEditPage', () => {
  it('renders buttons for this page', () => {
    const { container } = render(<GalleryEditPage />);

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('미리보기');
    expect(container).toHaveTextContent('갤러리 생성');
  });
});
