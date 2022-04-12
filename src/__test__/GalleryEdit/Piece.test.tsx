import { fireEvent, render } from '@testing-library/react';

import Piece from '../../components/GalleryEdit/Piece';
import pieceNumbers from '../../constants/pieceNumbers';
import { MOCK_HALLS } from '../../constants/state';

describe('Piece', () => {
  const handleClick = jest.fn();

  it('renders button', () => {
    const { getByRole } = render(
      <Piece
        halls={MOCK_HALLS}
        hallIndex={0}
        pieceIndex={0}
        openModal={handleClick}
      />,
    );

    expect(
      getByRole('button', {
        name: `작품 ${pieceNumbers[1]}`,
      }),
    ).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByRole } = render(
      <Piece
        halls={MOCK_HALLS}
        hallIndex={0}
        pieceIndex={0}
        openModal={handleClick}
      />,
    );

    const button = getByRole('button', {
      name: `작품 ${pieceNumbers[1]}`,
    });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
