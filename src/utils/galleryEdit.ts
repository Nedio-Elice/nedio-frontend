import { Gallery, Hall } from '../types/GalleryEdit';

export const isEmpty = (obj: any) => {
  return Object.values(obj).some((e) => {
    if (typeof e === 'string') return e === '';
    if (Array.isArray(e)) return e.length === 0;
    return false;
  });
};

export const isEmptyHalls = (halls: Hall[]) => {
  return halls.some((hall) => {
    return hall.pieces.every((piece) => {
      return isEmpty(piece);
    });
  });
};

export const setDefaultPieces = (id: string) => {
  return Array.from({ length: 10 }, (_, i) => {
    return {
      id: `${id}-${i + 1}`,
      title: '',
      description: '',
      imageUrl: '',
    };
  });
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
        id: '1644108008422',
        name: '1관 이름',
        pieces: [
          {
            id: '1644108008422-1',
            title: '1관 - 1번 작품',
            description: '1번 작품 소개',
            imageUrl:
              'https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          },
          { id: '1644108008422-2', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-3', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-4', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-5', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-6', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-7', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-8', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-9', title: '', description: '', imageUrl: '' },
          { id: '1644108008422-10', title: '', description: '', imageUrl: '' },
        ],
      },
      {
        id: '1644108046523',
        name: '2관 이름',
        pieces: [
          { id: '1644108046523-1', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-2', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-3', title: '', description: '', imageUrl: '' },
          {
            id: '1644108046523-4',
            title: '2관 4번 작품',
            description: '4번 설명',
            imageUrl:
              'https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          },
          { id: '1644108046523-5', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-6', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-7', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-8', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-9', title: '', description: '', imageUrl: '' },
          { id: '1644108046523-10', title: '', description: '', imageUrl: '' },
        ],
      },
    ],
  } as Gallery;

  return mockGalleryState;
};
