import { createSlice, Dispatch } from '@reduxjs/toolkit';

import { NavigateFunction } from 'react-router-dom';
import axiosInstance, { axiosInstanceFormData } from '../api/api';

import {
  setDefaultPieces,
  isEmpty,
  isEmptyHalls,
  isValidDate,
} from '../utils/galleryEdit';

import { Gallery } from '../types/GalleryEdit';
import { MESSAGE } from '../constants/messages';
import { SLICE } from '../constants/slice';

const initialState = {
  galleryInfo: {
    title: '',
    category: '',
    startDate: '',
    endDate: '',
    description: '',
    posterUrl: '',
  },
  halls: [],
  notification: '',
} as Gallery;

// 갤러리, 홀을 구분하는게 어떨지
// 홀을 생성하면 10개짜리 작품 배열을 만들어주고, 작품을 추가하거나 수정할 땐 인덱스를 참조하여 상태 관리

// const fetchData = {
//   ...galleryInfo,
//   halls,
// }

const { actions, reducer } = createSlice({
  name: SLICE.GALLERY,
  initialState,
  reducers: {
    addHall(state) {
      return {
        ...state,
        halls: [
          ...state.halls,
          {
            hallName: '',
            imagesData: setDefaultPieces(),
          },
        ],
      };
    },
    deleteHall(state, { payload: index }) {
      return {
        ...state,
        halls: [
          ...state.halls.slice(0, index),
          ...state.halls.slice(index + 1),
        ],
      };
    },
    changeHallName(state, { payload: { index, value } }) {
      const updated = [
        ...state.halls.slice(0, index),
        {
          hallName: value,
          imagesData: state.halls[index].imagesData,
        },
        ...state.halls.slice(index + 1),
      ];

      return {
        ...state,
        halls: updated,
      };
    },
    updatePiece(state, { payload: { hallIndex, pieceIndex, piece } }) {
      // const updated = state.data.halls.map((hall) => {
      //   if (hall.id === hallId) {
      //     const imagesData = hall.imagesData.map((prev) =>
      //       prev.imageId === imageId ? piece : prev,
      //     );
      //     return {
      //       ...hall,
      //       imagesData,
      //     };
      //   }
      //   return hall;
      // });

      const updated = [
        ...state.halls.slice(0, hallIndex),
        {
          ...state.halls[hallIndex],
          imagesData: [
            ...state.halls[hallIndex].imagesData.slice(0, pieceIndex),
            piece,
            ...state.halls[hallIndex].imagesData.slice(pieceIndex + 1),
          ],
        },
        ...state.halls.slice(hallIndex + 1),
      ];

      return {
        ...state,
        halls: updated,
      };
    },
    changeGalleryInput(state, { payload: { name, value } }) {
      return {
        ...state,
        galleryInfo: {
          ...state.galleryInfo,
          [name]: value,
        },
      };
    },
    setNotification(state, { payload: notification }) {
      return {
        ...state,
        notification,
      };
    },
    claerAllState() {
      return initialState;
    },
  },
});

export const {
  addHall,
  deleteHall,
  changeHallName,
  updatePiece,
  changeGalleryInput,
  setNotification,
  claerAllState,
} = actions;

export function changePosterUrl(formData: FormData) {
  return async (dispatch: Dispatch) => {
    const response = await axiosInstanceFormData.post('uploadImage', formData);

    const { url: imageUrl } = response.data;

    dispatch(changeGalleryInput({ name: 'posterUrl', value: imageUrl }));
  };
}

export function refreshNotification(text: string) {
  return async (dispatch: Dispatch) => {
    await dispatch(setNotification(''));
    dispatch(setNotification(text));
  };
}

export function updateGallery(navigate: NavigateFunction) {
  return async (dispatch: Dispatch, getState: any) => {
    const {
      gallery: { galleryInfo, halls },
    } = getState();

    await dispatch(setNotification(''));

    const { startDate, endDate } = galleryInfo;

    if (isEmpty(galleryInfo)) {
      dispatch(setNotification(MESSAGE.INVALID_FORM));
      return;
    }

    if (!isValidDate(startDate, endDate)) {
      dispatch(setNotification(MESSAGE.INVALID_DATE));
      return;
    }

    if (isEmptyHalls(halls)) {
      dispatch(setNotification(MESSAGE.MINIMUM_PIECE));
      return;
    }

    const data = { ...galleryInfo, halls };

    const response = await axiosInstance.post('galleries', data);

    console.log(response);

    // id 값 받아오면 상세 페이지로 리다이렉트
    navigate('/');
  };
}

export default reducer;
