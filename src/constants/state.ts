import { RootState } from '../store/root';

export const MOCK_STATE = {
  users: {
    isSignIn: true,
    userInfo: {
      _id: '',
      email: '',
      nickname: '',
      profileURL: '',
    },
  },
  gallery: {
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
  },
  comment: {
    success: '',
    message: '',
    data: [],
    count: 0,
  },
  profile: {
    _id: '',
    introduce: '',
    contact: '',
    profileURL: '',
    nickname: '',
    email: '',
  },
  myGallery: {
    list: [],
    length: 0,
  },
  search: {
    keyword: '',
    option: 'title',
  },
  _persist: {
    version: -1,
    rehydrated: true,
  },
} as RootState;

export const xxx = '';
