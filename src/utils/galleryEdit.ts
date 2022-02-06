import { Gallery, Hall, ImagesData } from '../types/GalleryEdit';

export const isEmpty = (obj: any) => {
  return Object.values(obj).some((e) => {
    if (typeof e === 'string') return e === '';
    if (Array.isArray(e)) return e.length === 0;
    return false;
  });
};

export const isEmptyHalls = (halls: Hall[]) => {
  return halls.some((hall) => {
    return hall.imagesData.every((piece) => {
      return isEmpty(piece);
    });
  });
};

export const isValidDate = (startDate: string, endDate: string) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 종료 시간이 시작 시간보다 앞서 있다면 false
  if (end.getTime() < start.getTime()) return false;

  // 시작 시간이 현재 시간보다 앞서 있는 동시에 당일도 아니라면 false
  // 앞서 있더라도 같은 날이면 ok
  if (start.getTime() < now.getTime() && start.getDate() !== now.getDate())
    return false;

  return true;
};

export const capitalizeString = (s: string): string => {
  return s[0].toUpperCase() + s.slice(1);
};

export const setDefaultPieces = (id: string) => {
  return Array.from({ length: 10 }, (_, i): ImagesData => {
    return {
      imageId: `${id}-${i + 1}`,
      imageTitle: '',
      imageDescription: '',
      imageUrl: '',
    };
  });
};

// export const getMockGalleryInputs = () => {
//   const mockGalleryState = {
//     title: '제주 특별전',
//     category: '자연',
//     startDate: '2022-01-30',
//     endDate: '2022-02-19',
//     description: '제주의 자연....',
//     posterUrl:
//       'https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//     halls: [
//       {
//         id: '1644108008422',
//         name: '1관 이름',
//         pieces: [
//           {
//             id: '1644108008422-1',
//             title: '1관 - 1번 작품',
//             description: '1번 작품 소개',
//             imageUrl:
//               'https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//           },
//           { id: '1644108008422-2', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-3', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-4', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-5', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-6', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-7', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-8', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-9', title: '', description: '', imageUrl: '' },
//           { id: '1644108008422-10', title: '', description: '', imageUrl: '' },
//         ],
//       },
//       {
//         id: '1644108046523',
//         name: '2관 이름',
//         pieces: [
//           { id: '1644108046523-1', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-2', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-3', title: '', description: '', imageUrl: '' },
//           {
//             id: '1644108046523-4',
//             title: '2관 4번 작품',
//             description: '4번 설명',
//             imageUrl:
//               'https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVqdXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//           },
//           { id: '1644108046523-5', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-6', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-7', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-8', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-9', title: '', description: '', imageUrl: '' },
//           { id: '1644108046523-10', title: '', description: '', imageUrl: '' },
//         ],
//       },
//     ],
//   } as Gallery;

//   return mockGalleryState;
// };
