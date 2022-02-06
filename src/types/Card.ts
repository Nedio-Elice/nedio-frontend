export interface Author {
  email: string;
  nickname: string;
  contact?: string;
}

export type Category =
  | '자연'
  | '인물'
  | '동물'
  | '예술'
  | '문화'
  | '건축'
  | '저널리즘'
  | '패션'
  | '미정';

export interface CardData {
  _id: string;
  posterUrl: string;
  description: string;
  startDate: Date;
  endDate: Date;
  title: string;
  nickname: string;
  authorId: string;
  category: Category;
}
