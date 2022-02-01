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

  it('renders poster upload interface', () => {
    const { getByLabelText } = render(<GalleryEdit />);

    expect(getByLabelText('포스터 업로드')).not.toBeNull();
  });

  it('renders gallery upload interfaces', () => {
    const { getByLabelText } = render(<GalleryEdit />);

    expect(getByLabelText('제목')).not.toBeNull();
    expect(getByLabelText('분류')).not.toBeNull();
    expect(getByLabelText('기간')).not.toBeNull();
    expect(getByLabelText('설명')).not.toBeNull();
  });

  it('renders buttons for this page', () => {
    const { container } = render(<GalleryEdit />);

    expect(container).toHaveTextContent('전시관 추가');
    expect(container).toHaveTextContent('미리보기');
    expect(container).toHaveTextContent('갤러리 생성');
  });
});
