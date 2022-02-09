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
  contact?: string;
  profileURL?: string;
}

export interface Hall {
  hallObjectId: string;
  hallName: string;
  imagesData: HallImages;
}

export interface HallImageData {
  imageTitle: string;
  imageDescription: string;
  imageUrl: string;
}

export type HallImages = Array<HallImageData>;

export type Halls = Array<Hall>;

export type Galleries = Array<Gallery>;
