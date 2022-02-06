export interface Author {
  email: string;
  nickname: string;
  contact?: string;
}

export interface CardData {
  _id: string;
  title: string;
  author: Author;
  posterUrl: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isOpened: boolean;
}

export interface ThemeCardData extends CardData {
  theme: string;
}
