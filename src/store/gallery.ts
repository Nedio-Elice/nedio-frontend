import { createSlice, Dispatch } from '@reduxjs/toolkit';

import axiosInstance, { axiosInstanceFormData } from '../api/api';

import {
  setDefaultPieces,
  isEmpty,
  isEmptyHalls,
  isValidDate,
  updateArrayByIndex,
} from '../utils/galleryEdit';

import { Gallery, UpdateGallery } from '../types/GalleryEdit';
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
  deletedHalls: [],
  notification: '',
  mode: 'create',
} as Gallery;

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
            hallTheme: '',
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
      const { halls } = state;

      const updateHall = {
        hallName: value,
        hallTheme: halls[index].hallTheme,
        imagesData: halls[index].imagesData,
      };

      const updated = updateArrayByIndex(halls, index, updateHall);

      return {
        ...state,
        halls: updated,
      };
    },
    changeHallTheme(state, { payload: { index, value } }) {
      const { halls } = state;

      const updateHall = {
        hallName: halls[index].hallName,
        hallTheme: value,
        imagesData: halls[index].imagesData,
      };

      const updated = updateArrayByIndex(halls, index, updateHall);

      return {
        ...state,
        halls: updated,
      };
    },
    updatePiece(state, { payload: { hallIndex, pieceIndex, piece } }) {
      const { halls } = state;

      const updatedHall = {
        ...halls[hallIndex],
        imagesData: updateArrayByIndex(
          halls[hallIndex].imagesData,
          pieceIndex,
          piece,
        ),
      };

      const updatedHalls = updateArrayByIndex(halls, hallIndex, updatedHall);

      return {
        ...state,
        halls: updatedHalls,
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
    setGallery(state, { payload: { galleryInfo, halls } }) {
      return {
        ...state,
        galleryInfo,
        halls,
      };
    },
    setMode(state, { payload: mode }) {
      return {
        ...state,
        mode,
      };
    },
    setDeleteHall(state, { payload: hallObjectId }) {
      return {
        ...state,
        deletedHalls: [...state.deletedHalls, hallObjectId],
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
  setGallery,
  setMode,
  setDeleteHall,
  claerAllState,
  changeHallTheme,
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

export function updateGallery({ navigate, galleryId }: UpdateGallery) {
  return async (dispatch: Dispatch, getState: any) => {
    const {
      gallery: { galleryInfo, halls, mode, deletedHalls },
    } = getState();

    await dispatch(setNotification(''));

    const { startDate, endDate } = galleryInfo;

    if (isEmpty(galleryInfo)) {
      dispatch(setNotification(MESSAGE.INVALID_FORM));
      return;
    }

    if (!isValidDate(startDate, endDate, mode)) {
      dispatch(setNotification(MESSAGE.INVALID_DATE));
      return;
    }

    if (!halls.length) {
      dispatch(setNotification(MESSAGE.MINIMUM_HALL));
      return;
    }

    if (isEmptyHalls(halls)) {
      dispatch(setNotification(MESSAGE.MINIMUM_PIECE));
      return;
    }

    const data = { ...galleryInfo, halls };

    if (mode === 'create') {
      const response = await axiosInstance.post('galleries', data);
      if (response.status === 200) {
        const { data: id } = response.data;
        navigate(`/galleries/${id}`);
      } else {
        dispatch(setNotification(MESSAGE.UPDATE_FAILED));
      }
    }

    if (mode === 'modify') {
      if (deletedHalls.length) {
        deletedHalls.forEach(async (hallObjectId: string) => {
          await axiosInstance.delete(`halls/${hallObjectId}`);
        });
      }

      const response = await axiosInstance.put(`galleries/${galleryId}`, data);

      if (response.status === 200) {
        navigate(`/galleries/${galleryId}`);
      } else {
        dispatch(setNotification(MESSAGE.UPDATE_FAILED));
      }
    }
  };
}

export function loadGallery(galleryId: string) {
  return async (dispatch: Dispatch) => {
    const response = await axiosInstance.get(`galleries/${galleryId}`);

    const {
      data: {
        title,
        category,
        posterUrl,
        description,
        startDate,
        endDate,
        halls,
      },
    } = response.data;

    const galleryInfo = {
      title,
      category,
      description,
      posterUrl,
      startDate: startDate.split('T')[0],
      endDate: endDate.split('T')[0],
    };

    dispatch(setGallery({ galleryInfo, halls }));
  };
}

export function fetchDeleteHall(index: number) {
  return async (dispatch: Dispatch, getState: any) => {
    const {
      gallery: { halls },
    } = getState();

    if (halls[index].hallObjectId) {
      const { hallObjectId } = halls[index];
      await dispatch(setDeleteHall(hallObjectId));
    }

    dispatch(deleteHall(index));
  };
}

export default reducer;
