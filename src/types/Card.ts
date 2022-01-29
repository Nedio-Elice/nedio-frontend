export interface Author {
  email: string;
  nickname: string;
  contact?: string;
}

export interface CardData {
  title: string;
  author: Author;
  posterUrl: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isOpened: boolean;
}
