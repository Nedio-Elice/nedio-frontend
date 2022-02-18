import { PointerLockControlsProps } from '@react-three/drei';
import { createSlice } from '@reduxjs/toolkit';
import { SLICE } from '../constants/slice';

interface State {
  movement: PointerLockControlsProps;
}

const initialState = {
  movement: '',
} as State;

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
