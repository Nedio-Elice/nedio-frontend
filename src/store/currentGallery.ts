import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getPositionOfLineAndCharacter } from 'typescript';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';
import { Gallery } from '../types/GalleryDetail';

const initialState = {
  posterUrl: '',
  description: '',
  endDate: '',
  startDate: '',
  category: '',
  title: '',
  author: { id: '', email: '', nickname: '' },
  authorId: '',
  halls: [],
} as Gallery;

export type GalleryResponse = {
  success: string;
  message: string;
  data: Gallery;
};

export const getGalCurrent = createAsyncThunk(
  'GET/GALCURRENT',
  async (galleryId: string | undefined) => {
    try {
      const response = await axiosInstance.get<GalleryResponse>(
        `galleries/${galleryId}`,
      );
      return response.data.data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

const currentGallerySlice = createSlice({
  name: SLICE.CURRENTGALLERY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGalCurrent.fulfilled, (state, { payload }) => {
      return { ...state, ...payload };
    });
    builder.addCase(getGalCurrent.rejected, (state, action) => {});
  },
});

// TODO: action 통일 및 createAsyncThunk 공부

const currentGalleryReducer = currentGallerySlice.reducer;

export default currentGalleryReducer;
