import Carousel from '../../components/Carousel';
import { sample, sample2, sample3 } from '../../constants/images';
import { ThemeCardData } from '../../types/Card';

// DELETE: 데이터 삭제
const mockData: ThemeCardData[] = [
  {
    _id: '61fe5569a1035b271361521a',
    theme: '자연',
    title: '별밤지기의 천문사진관',
    author: {
      nickname: 'jiseong',
      contact: '010-1234-5678',
      email: 'example@gmail.com',
    },
    posterUrl: sample,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    isOpened: true,
  },
  {
    _id: '61fe5569a1035b271361521b',
    theme: '인물',
    title: '슈퍼 네이쳐',
    author: {
      nickname: 'jiseong2',
      contact: '010-1234-5678',
      email: 'example@gmail.com',
    },
    posterUrl: sample2,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    isOpened: true,
  },
  {
    _id: '61fe5569a1035b271361521c',
    theme: '예술',
    title: '엘리스를 찾아서',
    author: {
      nickname: 'jiseong3',
      contact: '010-1234-5678',
      email: 'example@gmail.com',
    },
    posterUrl: sample3,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    isOpened: true,
  },
];

// const mockData: ThemeCardData[] = [];

function CarouselContainer() {
  return <Carousel cardInfo={mockData} />;
}

export default CarouselContainer;
