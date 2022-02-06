export interface Piece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Hall {
  id: string;
  name: string;
  pieces: Piece[];
}

export interface Gallery {
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  description: string;
  posterUrl: string;
  halls: Hall[];
}
