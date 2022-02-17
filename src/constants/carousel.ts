import { CardData } from '../types/Card';
import { addDaysFromToday } from '../utils/date';

const initData: CardData = {
  _id: '',
  category: '',
  title: '',
  nickname: '',
  posterUrl: '',
  description: '',
  startDate: new Date(),
  endDate: addDaysFromToday(7),
  authorId: '',
};

const CAROUSEL = {
  PADDING_DATA: 2,
  PADDING: 80,
  TRANSITION_TIME: 500,
  HANDLE_TYPE: {
    PREV: -1,
    NEXT: 1,
  },
  ITEM_MAX_WIDTH: 1250,
  ITEM_MIN_WIDTH: 450,
  INIT_DATA: initData,
};

// eslint-disable-next-line import/prefer-default-export
export { CAROUSEL };
