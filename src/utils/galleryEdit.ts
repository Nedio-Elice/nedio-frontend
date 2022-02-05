import { Gallery, Piece } from '../types/GalleryEdit';

export const sortByIndex = (pieces: Piece[]) => {
  const newWorks = pieces.sort(
    (a, b) =>
      parseInt(a.id.split('-')[1], 10) - parseInt(b.id.split('-')[1], 10),
  );
  return newWorks;
};

export const getPiecesButtons = (id: string) => {
  const pieces = Array.from({ length: 10 }, (_, i) => {
    return {
      id: `${id}-${i + 1}`,
      title: '',
      description: '',
      imageUrl: '',
    };
  });
  return pieces;
};

export const validatePieceForm = (piece: Piece) => {
  if (piece.title && piece.description) {
    return true;
  }
  return false;
};

export const getMockGalleryInputs = () => {
  const mockGalleryState = {
    title: '제주 특별전',
    category: '자연',
    startDate: '2022-01-30',
    endDate: '2022-02-19',
    description: '제주의 자연....',
    posterUrl:
      'https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    halls: [
      {
        id: '1',
        name: '돌관',
        pieces: getPiecesButtons('1'),
      },
      {
        id: '2',
        name: '해녀관',
        pieces: getPiecesButtons('2'),
      },
    ],
  } as Gallery;

  return mockGalleryState;
};
