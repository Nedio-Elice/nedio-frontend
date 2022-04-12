import { CardData } from '../types/Card';
import { HallInfo, ImageInfo } from '../types/GalleryEdit';
import { isOpen } from './date';

export const updateArrayByIndex = (array: any, index: number, obj: any) => {
  return [
    ...array.slice(0, index),
    { ...array[index], ...obj },
    ...array.slice(index + 1),
  ];
};

export const isEmpty = (obj: any) => {
  if (obj === null || obj === undefined) return true;
  return Object.values(obj).some((e) => {
    if (typeof e === 'string') return e === '';
    if (Array.isArray(e)) return e.length === 0;
    return false;
  });
};

export const isEmptyHalls = (halls: HallInfo[]) => {
  return halls.some(({ hallName, hallTheme, imagesData }) => {
    if (!hallName || !hallTheme) return true;
    return imagesData.every((piece) => {
      return isEmpty(piece);
    });
  });
};

export const isValidDate = (
  startDate: string,
  endDate: string,
  mode: string,
) => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (end.getTime() < start.getTime()) return false;

  if (
    mode === 'create' &&
    start.getTime() < now.getTime() &&
    start.getDate() !== now.getDate()
  )
    return false;

  return true;
};

export const capitalizeString = (s: string): string => {
  return s[0].toUpperCase() + s.slice(1);
};

export const setDefaultPieces = () => {
  return Array.from({ length: 10 }, (): ImageInfo => {
    return {
      imageTitle: '',
      imageDescription: '',
      imageUrl: '',
      width: '',
      height: '',
    };
  });
};

export const getId = () => {
  return new Date().valueOf().toString();
};

export const listOfDisplayGalleries = (list: CardData[]): CardData[] => {
  return list.reduce((acc: CardData[], cur: CardData) => {
    const { startDate, endDate } = cur;

    if (isOpen({ startDate, endDate })) acc.push(cur);

    return acc;
  }, []);
};
