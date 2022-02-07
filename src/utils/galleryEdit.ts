import { Hall, ImagesData } from '../types/GalleryEdit';

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

  if (end.getTime() < start.getTime()) return false;

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

export const getId = () => {
  return new Date().valueOf().toString();
};
