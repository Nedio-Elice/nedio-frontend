import { Piece } from '../types/GalleryEdit';

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
