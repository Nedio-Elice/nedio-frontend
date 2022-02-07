import { createSlice } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';

export interface Search {
  keyword: string;
}

const initialState = {
  keyword: '',
} as Search;

const { actions, reducer } = createSlice({
  name: SLICE.SEARCH,
  initialState,
  reducers: {
    setKeyword(state, { payload: keyword }) {
      return {
        ...state,
        keyword,
      };
    },
    resetKeyword(state) {
      return {
        ...initialState,
      };
    },
  },
});

// actions
export const { setKeyword, resetKeyword } = actions;

const searchReducer = reducer;

export default searchReducer;
