import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';
import { isDoStatement } from 'typescript';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';
import { Author, Galleries, Halls } from '../types/GalleryDetail';

export interface Gallery {
  _id: string;
  posterUrl: string;
  description: string;
  endDate: string;
  startDate: string;
  category: string;
  title: string;
  nickname: string;
  authorId: string;
}

export type GalleryResponse = {
  success: string;
  message: string;
  data: Array<Gallery>;
};

interface GalleryState {
  list: Array<Gallery>;
  length: number;
}

const initialState = {} as GalleryState;

function FilterGalRunning(data: Array<Gallery>) {
  return data.filter(
    (g: Gallery) =>
      Date.parse(g.startDate) < Date.now() &&
      Date.parse(g.endDate) > Date.now(),
  );
}
function FilterGalComing(data: Array<Gallery>) {
  return data.filter((g: Gallery) => Date.parse(g.startDate) > Date.now());
}
function FilterGalClosed(data: Array<Gallery>) {
  return data.filter((g: Gallery) => Date.parse(g.endDate) < Date.now());
}

function TrimGalleries(data: Array<Gallery>, currPage: number) {
  const TrimmedGalleries = [];
  const CARDS_PER_PAGE = 8;
  for (
    let i = currPage * CARDS_PER_PAGE;
    i < (currPage + 1) * CARDS_PER_PAGE;
    i += 1
  ) {
    if (data[i]) TrimmedGalleries.push(data[i]);
  }
  return TrimmedGalleries;
}

export const getGalRunning = createAsyncThunk(
  'GET/GALRUNNING',
  async (currPage: number) => {
    try {
      const response = await axiosInstance.get<GalleryResponse>(
        `galleries/myGallery`,
      );
      const FilteredGalleries = FilterGalRunning(response.data.data);
      return {
        list: TrimGalleries(FilteredGalleries, currPage),
        length: FilteredGalleries.length,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const getGalComing = createAsyncThunk(
  'GET/GALCOMING',
  async (currPage: number) => {
    try {
      const response = await axiosInstance.get<GalleryResponse>(
        `galleries/myGallery`,
      );
      const FilteredGalleries = FilterGalComing(response.data.data);
      return {
        list: TrimGalleries(FilteredGalleries, currPage),
        length: FilteredGalleries.length,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const getGalClosed = createAsyncThunk(
  'GET/GALCLOSED',
  async (currPage: number) => {
    try {
      const response = await axiosInstance.get<GalleryResponse>(
        `galleries/myGallery`,
      );
      const FilteredGalleries = FilterGalClosed(response.data.data);
      return {
        list: TrimGalleries(FilteredGalleries, currPage),
        length: FilteredGalleries.length,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const deleteGallery = createAsyncThunk(
  'DELETE/GALLERY',
  async (galleryId: string | undefined) => {
    try {
      const response = await axiosInstance.delete<GalleryResponse>(
        `galleries/${galleryId}`,
      );
      return { message: 'success' };
    } catch (error) {
      return { message: 'error' };
    }
  },
);

const myGallerySlice = createSlice({
  name: SLICE.MYGALLERY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGalRunning.fulfilled, (state, { payload }) => {
      return { list: payload.list, length: payload.length };
    });
    builder.addCase(getGalRunning.rejected, (state, action) => {});
    builder.addCase(getGalComing.fulfilled, (state, { payload }) => {
      return { list: payload.list, length: payload.length };
    });
    builder.addCase(getGalComing.rejected, (state, action) => {});
    builder.addCase(getGalClosed.fulfilled, (state, { payload }) => {
      return { list: payload.list, length: payload.length };
    });
    builder.addCase(getGalClosed.rejected, (state, action) => {});
    builder.addCase(deleteGallery.fulfilled, (state, { payload }) => {
      return { ...state, ...payload };
    });
    builder.addCase(deleteGallery.rejected, (state, { payload }) => {
      return { ...state, payload };
    });
  },
});

// TODO: action 통일 및 createAsyncThunk 공부

const myGalleryReducer = myGallerySlice.reducer;

export default myGalleryReducer;
