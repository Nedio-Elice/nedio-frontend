import { CardData } from '../types/Card';
import { CAROUSEL } from '../constants/carousel';

export function paddingToItem(items: Array<CardData>, paddingLength: number) {
  // shallow copy
  if (items.length < 1) items.push(CAROUSEL.INIT_DATA);
  const paddedItems: Array<CardData> = [...items];

  for (let i = 0; i < paddingLength; i += 1) {
    const firstIdx = i % items.length;
    const lastIdx = items.length - 1 - (i % items.length);
    paddedItems.push(items[firstIdx]);
    paddedItems.unshift(items[lastIdx]);
  }

  return paddedItems;
}

export function calcWidth(
  windowWidth: number,
  padding: number,
  minWidth: number,
  maxWidth: number,
) {
  let nextWidth = windowWidth - padding * 2;

  if (nextWidth < minWidth) nextWidth = minWidth;

  if (nextWidth > maxWidth) nextWidth = maxWidth;

  return nextWidth;
}
