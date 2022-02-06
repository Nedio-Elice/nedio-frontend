import { useEffect, useState } from 'react';
import axiosInstance from '../../api/api';
import Carousel from '../../components/Carousel';
import { sample, sample2, sample3 } from '../../constants/images';
import { CardData } from '../../types/Card';

// DELETE: 데이터 삭제
const mockData: CardData[] = [
  {
    _id: '61fe5569a1035b271361521a',
    title: '별밤지기의 천문사진관',
    nickname: 'jiseong',
    posterUrl: sample,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    authorId: 'authorId61fe5569a1035b271361521a',
    category: '자연',
  },
  {
    _id: '61fe5569a1035b271361521b',
    category: '인물',
    title: '슈퍼 네이쳐',
    nickname: 'jiseong2',
    posterUrl: sample2,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    authorId: 'authorId61fe5569a1035b271361521b',
  },
  {
    _id: '61fe5569a1035b271361521c',
    category: '예술',
    title: '엘리스를 찾아서',
    nickname: 'jiseong3',
    posterUrl: sample3,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    authorId: 'authorId61fe5569a1035b271361521c',
  },
];

function CarouselContainer() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    axiosInstance
      .get(
        '/galleries/filtering?page=1&perPage=5&title=&nickname=tes&category=자연',
      )
      .then((res) => setCards(res.data.data))
      .catch((e) => console.log(e));
  }, []);

  return <Carousel cardInfo={mockData} />;
}

export default CarouselContainer;
