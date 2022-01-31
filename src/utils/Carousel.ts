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
  maxWidth: number,
) {
  const width = windowWidth - padding * 2;
  return width > maxWidth ? maxWidth : width;
}
