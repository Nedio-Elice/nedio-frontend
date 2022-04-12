import { RootState } from '../store/root';

export const MOCK_PIECE = {
  imageTitle: '',
  imageDescription: '',
  imageUrl: '',
  width: '',
  height: '',
};

export const MOCK_PIECES = new Array(10).fill(MOCK_PIECE);

export const MOCK_HALLS = [
  {
    id: '1',
    hallName: '',
    hallTheme: '',
    imagesData: MOCK_PIECES,
  },
  {
    id: '2',
    hallName: '',
    hallTheme: '',
    imagesData: MOCK_PIECES,
  },
];

export const MOCK_STATE = {
  user: {
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
    halls: [MOCK_HALLS[0]],
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
  controls: {
    movement: {
      isLocked: false,
    },
  },
  _persist: {
    version: -1,
    rehydrated: true,
  },
} as RootState;
