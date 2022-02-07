export interface Gallery {
  posterUrl: string;
  description: string;
  endDate: string;
  startDate: string;
  category: string;
  title: string;
  author: Author;
  authorId: string;
  halls: Halls;
}

export interface Author {
  email: string;
  nickname: string;
  contact: string;
}

export interface Hall {
  hallId: string;
  hallName: string;
}

export type Halls = Array<Hall>;

export type Galleries = Array<Gallery>;
