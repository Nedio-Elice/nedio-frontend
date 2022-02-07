export interface ImageInfo {
  imageTitle: string;
  imageDescription: string;
  imageUrl: string;
}

export interface HallInfo {
  hallName: string;
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
  notification: string;
}
