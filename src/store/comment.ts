import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';
import { isDoStatement } from 'typescript';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';
import {
  CommentPut,
  Comments,
  CommentState,
  NewComment,
} from '../types/Comment';

const initialState = {} as Comments;

export const getComments = createAsyncThunk(
  'GET/COMMENTS',
  async (state: CommentState) => {
    try {
      const response = await axiosInstance.get<Comments>(
        `comments/${state.galleryId}?page=${state.currPage + 1}&perPage=5`,
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
        `comments/${comment.commentId}`,
        {
          content: comment.content,
        },
      );
      return { message: 'success' };
    } catch (error) {
      return { message: 'error' };
    }
  },
);

export const postComment = createAsyncThunk(
  'POST/COMMENT',
  async (comment: NewComment) => {
    try {
      const response = await axiosInstance.post<NewComment>(
        // eslint-disable-next-line no-underscore-dangle
        `comments`,
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
      await axiosInstance.delete<string>(
        // eslint-disable-next-line no-underscore-dangle
        `comments/${commentId}`,
      );
      return { message: 'success' };
    } catch (error) {
      return { message: 'error' };
    }
  },
);

const commentSlice = createSlice({
  name: SLICE.COMMENT,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, { payload }) => {
      return { ...state, data: payload.data, count: payload.count };
    });
    builder.addCase(getComments.rejected, (state, action) => {});
    builder.addCase(putComment.fulfilled, (state, { payload }) => {
      return { ...state, ...payload };
    });
    builder.addCase(postComment.fulfilled, (state, { payload }) => {});
    builder.addCase(deleteComment.fulfilled, (state, { payload }) => {
      return { ...state, ...payload };
    });
  },
});

const commentReducer = commentSlice.reducer;

export default commentReducer;
