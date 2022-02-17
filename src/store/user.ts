import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axiosInstance from '../api/api';
import { SLICE } from '../constants/slice';
import { removeToken, setToken } from '../utils/auth';

export interface MyInfo {
  _id?: string;
  email: string;
  nickname: string;
  profileURL: string;
  introduce?: string;
  contact?: string;
}

const initialState = {
  isSignIn: false,
  userInfo: {
    _id: '',
    email: '',
    nickname: '',
    profileURL: '',
    introduce: '',
    contact: '',
  } as MyInfo,
};

const { actions, reducer } = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {
    setUser(state, { payload: user }) {
      return {
        isSignIn: true,
        userInfo: {
          ...user,
        },
      };
    },
    resetUser(state) {
      return {
        ...initialState,
      };
    },
  },
});

// actions
export const { setUser, resetUser } = actions;

export function signInUser(userData: MyInfo) {
  return async (dispatch: Dispatch) => {
    const result = await axiosInstance.post('/users/login', userData);
    const { accessToken } = result.data;

    dispatch(setUser(result.data.data));
    setToken(accessToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    return 'success';
  };
}

export function updateUser(userData: MyInfo) {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosInstance.put(`/users/${userData._id}`, {
        introduce: userData.introduce,
        contact: userData.contact,
        profileURL: userData.profileURL,
        nickname: userData.nickname,
        email: userData.email,
      });
      dispatch(setUser(userData));
      alert('유저 정보 업데이트가 되었습니다.');
      return result.data;
    } catch (error) {
      alert('유저 정보 업데이트에 실패하였습니다.');
      return error;
    }
  };
}

export function signOutUser() {
  return async (dispatch: Dispatch) => {
    dispatch(resetUser());
    // http only 시 삭제
    document.cookie = `${'token'}=; expires=Thu, 01 Jan 1999 00:00:00 GMT;`;
    removeToken();
    axiosInstance.defaults.headers.common.Authorization = ``;

    return 'success';
  };
}

export function signInUserByToken(token: string) {
  return async (dispatch: Dispatch) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const result = await axiosInstance.get('/users/myInfo');

      dispatch(setUser(result.data));
    } catch (e) {
      // 만료또는 유효하지 않는 토큰일경우,
      dispatch(signOutUser() as any);
    }
  };
}

const userReducer = reducer;

export default userReducer;
