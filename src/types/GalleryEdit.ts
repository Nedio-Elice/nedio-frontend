// state

import { NavigateFunction } from 'react-router-dom';

export interface ImageInfo {
  imageTitle: string;
  imageDescription: string;
  imageUrl: string;
  width: string;
  height: string;
}

export interface HallInfo {
  hallName: string;
  hallTheme: string;
  imagesData: ImageInfo[];
}

export interface GalleryInfo {
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  description: string;
  posterUrl: string;
}

export interface Gallery {
  galleryInfo: GalleryInfo;
  halls: HallInfo[];
  deletedHalls: string[];
  notification: string;
  mode: 'create' | 'modify';
}

// props

export interface GalleryProps {
  gallery: GalleryInfo;
  notification: string;
  halls: HallInfo[];
  mode: 'create' | 'modify';
  onClickAddHallButton: () => void;
  onClickUpdateGallery: () => void;
  onChangeNotification: (text: string) => void;
  onChangePosterUrl: (formData: FormData) => void;
  onClickDeleteHallButton: (index: number) => void;
  onChangeHallName: ({ index, value }: ChangeValueWithIndex) => void;
  onChangeHallTheme: ({ index, value }: ChangeValueWithIndex) => void;
  onChangeGalleryInputField: ({ value, name }: ChangeValueWithName) => void;
  onChangePieceField: ({
    hallIndex,
    pieceIndex,
    piece,
  }: OnChangePieceFieldArgs) => void;
}

export type HallsProps = Pick<
  GalleryProps,
  | 'halls'
  | 'onChangeHallName'
  | 'onChangeHallTheme'
  | 'onClickDeleteHallButton'
  | 'onChangePieceField'
  | 'onChangeNotification'
>;

export interface HallFieldProps
  extends Pick<
    HallsProps,
    | 'onChangeHallName'
    | 'onClickDeleteHallButton'
    | 'onChangeHallTheme'
    | 'onChangeNotification'
  > {
  name: string;
  theme: string;
  halls: HallInfo[];
  hallIndex: number;
  pieces: ImageInfo[];
  openModal: ({ hallIndex, pieceIndex }: Index) => void;
}

export interface HallThemeSelect {
  label: string;
  theme: string;
  hallIndex: number;
  onChangeHallTheme: ({ index, value }: ChangeValueWithIndex) => void;
}

export interface PosterProps {
  label: string;
  width: string;
  height: string;
  thumbnail: string;
  onChangePosterUrl: (formData: FormData) => void;
  onChangeNotification: (text: string) => void;
}

export interface ArtWorkProps {
  label: string;
  width: string;
  height: string;
  thumbnail: string;
  hallIndex?: number;
  pieceIndex?: number;
  piece?: ImageInfo;
  halls?: HallInfo[];
  onChangeImageData: ({
    imageUrl,
    width,
    height,
  }: {
    imageUrl: string;
    width: string;
    height: string;
  }) => void;
  onChangeNotification: (text: string) => void;
}

export interface PieceFieldProps {
  piece: ImageInfo;
  hallIndex: number;
  pieceIndex: number;
  onChange: ({ hallIndex, pieceIndex, piece }: OnChangePieceFieldArgs) => void;
  onChangePosterUrl: (formData: FormData) => void;
  onChangeNotification: (text: string) => void;
}

export interface InputProps {
  label: string;
  title: string;
  theme: string;
  category: string;
  description: string;
  placeholder: string;
  startDate: string;
  endDate: string;
  onChange: ({ value, name }: ChangeValueWithName) => void;
}

export interface GalleryButtonsProps {
  mode: 'create' | 'modify';
  onClickAddHallButton: () => void;
  onClickUpdateGallery: () => void;
}

export interface PieceButtonProps {
  halls: HallInfo[];
  hallIndex: number;
  pieceIndex: number;
  openModal: ({ hallIndex, pieceIndex }: Index) => void;
}

export interface ModalProps {
  halls: HallInfo[];
  hallIndex: number;
  pieceIndex: number;
  closeModal: () => void;
  onChange: ({ hallIndex, pieceIndex, piece }: OnChangePieceFieldArgs) => void;
  onChangeNotification: (text: string) => void;
}

// prameters

export interface ChangeValueWithIndex {
  index: number;
  value: string;
}

export interface ChangeValueWithName {
  value: string;
  name: string;
}

export interface OnChangePieceFieldArgs {
  hallIndex: number;
  pieceIndex: number;
  piece: ImageInfo;
}

export interface UpdateGallery {
  navigate: NavigateFunction;
  galleryId?: string;
}

export interface Index {
  hallIndex: number;
  pieceIndex: number;
}
