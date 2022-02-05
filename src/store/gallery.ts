import { createSlice, Dispatch } from '@reduxjs/toolkit';

import axios from 'axios';

import { url } from '../api/api';

import { fetchGallery } from '../api/mockApi';

import { SLICE } from '../constants/slice';

import { Gallery, Piece } from '../types/GalleryEdit';

import { getPiecesButtons } from '../utils/galleryEdit';

const initialState = {
  title: '',
  category: '',
  startDate: '',
  endDate: '',
  description: '',
  posterUrl: '',
  halls: [],
} as Gallery;

const { actions, reducer } = createSlice({
  name: SLICE.GALLERY,
  initialState,
  reducers: {
    addHall(state) {
      const id = new Date().valueOf().toString();

      return {
        ...state,
        halls: [
          ...state.halls,
          {
            id,
            name: '',
            pieces: getPiecesButtons(id),
          },
        ],
      };
    },
    deleteHall(state, { payload: id }) {
      const updatedHalls = state.halls.filter((hall) => hall.id !== id);

      return {
        ...state,
        halls: updatedHalls,
      };
    },
    changeHallName(state, { payload: { id, value } }) {
      const updatedHalls = state.halls.map((hall) =>
        hall.id === id ? { ...hall, name: value } : hall,
      );

      return {
        ...state,
        halls: updatedHalls,
      };
    },
    updatePiece(state, { payload: piece }) {
      const { id } = piece;

      const hallId = id.split('-')[0];

      const updatedHalls = state.halls.map((hall) => {
        if (hall.id === hallId) {
          const p = hall.pieces.map((prev) => (prev.id === id ? piece : prev));
          return {
            ...hall,
            pieces: p,
          };
        }
        return hall;
      });

      return {
        ...state,
        halls: updatedHalls,
      };
    },
    changeGalleryInput(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
  },
});

export const {
  addHall,
  deleteHall,
  changeHallName,
  updatePiece,
  changeGalleryInput,
} = actions;

export function changePosterUrl(formData: FormData, piece?: Piece) {
  return async (dispatch: Dispatch) => {
    const response = await axios({
      method: 'POST',
      url: `${url}api/uploadImage`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const { url: imageUrl } = response.data;

    if (piece) {
      const newPiece = {
        ...piece,
        imageUrl,
      };
      dispatch(updatePiece(newPiece));
      return;
    }

    dispatch(changeGalleryInput({ name: 'posterUrl', value: imageUrl }));
  };
}

export function updateGallery() {
  return async (dispatch: Dispatch, getState: any) => {
    const { gallery } = getState();

    const response = await fetchGallery(gallery);

    // TODO: 필수 항목 미입력시 에러 상태 추가

    // TODO: 업로드 실패시 에러 상태 추가?
    console.log(response);
  };
}

export default reducer;
