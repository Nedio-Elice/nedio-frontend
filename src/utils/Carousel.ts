import { ThemeCardData } from '../types/Card';

export function paddingToItem(
  items: Array<ThemeCardData>,
  paddingLength: number,
) {
  const paddedItems: Array<ThemeCardData> = [...items];
  const itemLen = items.length;

  for (let i = 0; i < paddingLength; i += 1) {
    const firstIdx = i % itemLen;
    const lastIdx = itemLen - 1 - (i % itemLen);
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
