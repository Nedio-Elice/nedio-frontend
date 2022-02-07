import { createSlice } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';

type OptionType = 'title' | 'nickname';

export interface Search {
  keyword: string;
  option: OptionType;
}

const initialState = {
  keyword: '',
  option: 'title',
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
    setOption(state, { payload: option }) {
      return {
        ...state,
        option,
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
export const { setKeyword, setOption, resetKeyword } = actions;

const searchReducer = reducer;

export default searchReducer;
