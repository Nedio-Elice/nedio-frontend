import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';
import { isDoStatement } from 'typescript';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';

interface CommentSingle {
  _id: string;
  content: string;
  authorId: string;
  galleryId: string;
}

interface CommentPut {
  commentId: string;
  content: string;
}

export type Comments = {
  success: string;
  message: string;
  data: Array<CommentSingle>;
};

interface CommentState {
  galleryId: string | undefined;
  currPage: number;
}

interface NewComment {
  galleryId: string | undefined;
  content: string;
}

const initialState = {} as Comments;

export const getComments = createAsyncThunk(
  'GET/COMMENTS',
  async (state: CommentState) => {
    try {
      const response = await axiosInstance.get<Comments>(
        `api/comments/${state.galleryId}?page=${state.currPage + 1}&perPage=5`,
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const putComment = createAsyncThunk(
  'PUT/COMMENT',
  async (comment: CommentPut) => {
    try {
      const response = await axiosInstance.put<CommentPut>(
        // eslint-disable-next-line no-underscore-dangle
        `api/comments/${comment.commentId}`,
        {
          content: comment.content,
        },
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const postComment = createAsyncThunk(
  'POST/COMMENT',
  async (comment: NewComment) => {
    try {
      const response = await axiosInstance.post<NewComment>(
        // eslint-disable-next-line no-underscore-dangle
        `api/comments`,
        {
          galleryId: comment.galleryId,
          content: comment.content,
        },
      );
      return response;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const deleteComment = createAsyncThunk(
  'DELETE/COMMENT',
  async (commentId: string) => {
    try {
      const response = await axiosInstance.delete<string>(
        // eslint-disable-next-line no-underscore-dangle
        `api/comments/${commentId}`,
      );
      return response;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

const userSlice = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, { payload: { data } }) => {
      return { ...state, data };
    });
    builder.addCase(getComments.rejected, (state, action) => {});
    builder.addCase(putComment.fulfilled, (state, { payload }) => {});
    builder.addCase(postComment.fulfilled, (state, { payload }) => {});
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {});
  },
});

// TODO: action 통일 및 createAsyncThunk 공부

const commentReducer = userSlice.reducer;

export default commentReducer;
