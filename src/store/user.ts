import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';

export interface MyInfo {
  email: string;
  name: string;
  profileURL: string;
}

const initialState = {
  email: '',
  name: '',
  profileURL: '',
} as MyInfo;

const userSlice = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {},
});

// TODO: action 통일 및 createAsyncThunk 공부

const userReducer = userSlice.reducer;

export default userReducer;
