import { Author } from './GalleryDetail';

export interface CommentProps {
  commentId: string;
  author: Author;
  authorId: string;
  content: string;
  galleryId: string | undefined;
  currPage: number;
  handleClickDelete: (value: string) => void;
}

export interface CommentPost {
  commentId: string;
  content: string;
}

export interface CommentSingle {
  _id: string;
  content: string;
  authorId: string;
  galleryId: string;
}

export interface CommentPut {
  commentId: string;
  content: string;
}

export type Comments = {
  success: string;
  message: string;
  data: Array<CommentSingle>;
  count: number;
};

export interface CommentState {
  galleryId: string | undefined;
  currPage: number;
}

export interface NewComment {
  galleryId: string | undefined;
  content: string;
}
