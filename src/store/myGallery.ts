import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';
import { isDoStatement } from 'typescript';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';
import { Author, Galleries, Halls } from '../types/GalleryDetail';

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
  isOpened: boolean;
}

const initialState = [] as Galleries;

export const getGalleries = createAsyncThunk('GET/GELLERIES', async () => {
  try {
    const response = await axiosInstance.get<Galleries>(`galleries/`);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.response?.data);
  }
});

const myGallerySlice = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGalleries.fulfilled, (state, { payload }) => {
      return [...state, ...payload];
    });
    builder.addCase(getGalleries.rejected, (state, action) => {});
  },
});

// TODO: action 통일 및 createAsyncThunk 공부

const myGalleryReducer = myGallerySlice.reducer;

export default myGalleryReducer;
