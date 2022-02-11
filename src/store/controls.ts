import { createSlice } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';

const initialState = {
  movement: {
    isLocked: false,
  },
};

const { actions, reducer } = createSlice({
  name: SLICE.CONTROLS,
  initialState,
  reducers: {
    setControls(state, { payload: movement }) {
      return {
        ...state,
        movement,
      };
    },
  },
});

// actions
export const { setControls } = actions;

const controlsReducer = reducer;

export default controlsReducer;
