import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse, AxiosError } from 'axios';
import { isDoStatement } from 'typescript';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';

export type User = {
  id: string | undefined;
  introduce: string;
  contact: string;
  profileURL: string;
  nickname: string;
  email: string;
};

const initialState = {
  id: '',
  introduce: '',
  contact: '',
  profileURL: '',
  nickname: '',
  email: '',
} as User;

export const getUser = createAsyncThunk(
  'GET/USER',
  async (userId: string | undefined) => {
    try {
      const response = await axiosInstance.get<User>(`users/${userId}`);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  },
);

export const putUser = createAsyncThunk('PUT/USER', async (user: User) => {
  try {
    const response = await axiosInstance.put<User>(`users/${user.id}`, {
      nickname: user.nickname,
      email: user.email,
      introduce: user.introduce,
      profileURL: user.profileURL,
      contact: user.contact,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.response?.data);
  }
});

const profileSlice = createSlice({
  name: SLICE.PROFILE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUser.fulfilled,
      (
        state,
        { payload: { introduce, contact, profileURL, nickname, email } },
      ) => {
        return { ...state, introduce, contact, profileURL, nickname, email };
      },
    );
    builder.addCase(getUser.rejected, (state, action) => {});
    builder.addCase(
      putUser.fulfilled,
      (
        state,
        { payload: { introduce, contact, profileURL, nickname, email } },
      ) => {
        return { ...state, introduce, contact, profileURL, nickname, email };
      },
    );
    builder.addCase(putUser.rejected, (state, action) => {});
  },
});

// TODO: action 통일 및 createAsyncThunk 공부

const profileReducer = profileSlice.reducer;

export default profileReducer;
