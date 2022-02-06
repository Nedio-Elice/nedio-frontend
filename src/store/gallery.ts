import { createSlice, Dispatch } from '@reduxjs/toolkit';

import axios from 'axios';

import axiosInstance, { url } from '../api/api';

import { fetchGallery } from '../api/mockApi';

import { SLICE } from '../constants/slice';

import { Gallery, ImagesData } from '../types/GalleryEdit';

import { setDefaultPieces, isEmpty, isEmptyHalls } from '../utils/galleryEdit';

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
            hallName: '',
            imagesData: setDefaultPieces(id),
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
        hall.id === id ? { ...hall, hallName: value } : hall,
      );

      return {
        ...state,
        halls: updatedHalls,
      };
    },
    updatePiece(state, { payload: piece }) {
      const { imageId } = piece;

      const hallId = imageId.split('-')[0];

      const updatedHalls = state.halls.map((hall) => {
        if (hall.id === hallId) {
          const p = hall.imagesData.map((prev) =>
            prev.imageId === imageId ? piece : prev,
          );
          return {
            ...hall,
            imagesData: p,
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

export function changePosterUrl(formData: FormData, piece?: ImagesData) {
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

    const {
      title,
      category,
      description,
      startData,
      endDate,
      posterUrl,
      halls,
    } = gallery;

    if (isEmpty(gallery)) {
      // valid message handling
      console.log('Not Valid');
      return;
    }

    if (isEmptyHalls(halls)) {
      // valid message handling
      console.log('Not Valid Hall');
    }

    // // TODO: 실제 데이터 전송
    // const data =

    // const result = await axiosInstance.post('/users/login', userData);

    // const response = await fetchGallery(gallery);

    // console.log(response);

    // 요청 성공하면 상태 초기화?

    // 리다이렉트는 언제? 어디서?
  };
}

export default reducer;
