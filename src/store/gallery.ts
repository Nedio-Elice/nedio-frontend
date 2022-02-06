import { createSlice, Dispatch } from '@reduxjs/toolkit';

import axiosInstance, { axiosInstanceFormData } from '../api/api';

import { SLICE } from '../constants/slice';

import { Gallery, ImagesData } from '../types/GalleryEdit';

import {
  setDefaultPieces,
  isEmpty,
  isEmptyHalls,
  isValidDate,
  getId,
} from '../utils/galleryEdit';

const initialState = {
  data: {
    title: '',
    category: '',
    startDate: '',
    endDate: '',
    description: '',
    posterUrl: '',
    halls: [],
  },
  notification: '',
} as Gallery;

const { actions, reducer } = createSlice({
  name: SLICE.GALLERY,
  initialState,
  reducers: {
    addHall(state) {
      const id = getId();

      return {
        ...state,
        data: {
          ...state.data,
          halls: [
            ...state.data.halls,
            {
              id,
              hallName: '',
              imagesData: setDefaultPieces(id),
            },
          ],
        },
      };
    },
    deleteHall(state, { payload: id }) {
      return {
        ...state,
        halls: state.data.halls.filter((hall) => hall.id !== id),
      };
    },
    changeHallName(state, { payload: { id, value } }) {
      const updated = state.data.halls.map((hall) =>
        hall.id === id ? { ...hall, hallName: value } : hall,
      );

      return {
        ...state,
        data: {
          ...state.data,
          halls: updated,
        },
      };
    },
    updatePiece(state, { payload: piece }) {
      const { imageId } = piece;

      const hallId = imageId.split('-')[0];

      const updated = state.data.halls.map((hall) => {
        if (hall.id === hallId) {
          const imagesData = hall.imagesData.map((prev) =>
            prev.imageId === imageId ? piece : prev,
          );
          return {
            ...hall,
            imagesData,
          };
        }
        return hall;
      });

      return {
        ...state,
        data: {
          ...state.data,
          halls: updated,
        },
      };
    },
    changeGalleryInput(state, { payload: { name, value } }) {
      return {
        ...state,
        data: {
          ...state.data,
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
    resetGalleryEditState() {
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
  resetGalleryEditState,
} = actions;

export function changePosterUrl(formData: FormData, piece?: ImagesData) {
  return async (dispatch: Dispatch) => {
    const response = await axiosInstanceFormData.post(
      'api/uploadImage',
      formData,
    );

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

export function refreshNotification(text: string) {
  return async (dispatch: Dispatch) => {
    await dispatch(setNotification(''));
    dispatch(setNotification(text));
  };
}

export function updateGallery() {
  return async (dispatch: Dispatch, getState: any) => {
    const {
      gallery: { data },
    } = getState();

    await dispatch(setNotification(''));

    const { startDate, endDate, halls } = data;

    if (isEmpty(data)) {
      const notification = '모든 항목을 입력해주세요';
      dispatch(setNotification(notification));
      console.log('Not Valid Gallery');
      return;
    }

    if (!isValidDate(startDate, endDate)) {
      const notification = '유효하지 않은 날짜 입력입니다';
      dispatch(setNotification(notification));
      console.log('Not Valid Date!');
      return;
    }

    if (isEmptyHalls(halls)) {
      const notification = '전시관에 최소 한 개 이상의 작품을 등록해주세요';
      dispatch(setNotification(notification));
      return;
    }

    // // TODO: 실제 데이터 전송

    const response = await axiosInstance.post('api/galleries', data);

    console.log(response);

    // 요청 성공하면 상태 초기화?

    // 리다이렉트는 언제? 어디서?
  };
}

export default reducer;
