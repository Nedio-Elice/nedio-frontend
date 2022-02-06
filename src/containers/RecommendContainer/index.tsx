import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';
import Card from '../../components/Card';
import CardLayout from '../../components/CardLayout';
import { sample, sample2, sample3 } from '../../constants/images';
import { PATH } from '../../constants/path';
import { CardData } from '../../types/Card';

// DELETE: 데이터 삭제
const mockData: CardData[] = [
  {
    _id: '61fe5569a1035b271361521a',
    title: '제주 특별전',
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
    title: '슈퍼 네이쳐',

    nickname: 'jiseong2',

    posterUrl: sample2,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    authorId: 'authorId61fe5569a1035b271361521b',
    category: '자연',
  },
  {
    _id: '61fe5569a1035b271361521c',
    title: '엘리스를 찾아서',
    nickname: 'jiseong3',
    posterUrl: sample3,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    authorId: 'authorId61fe5569a1035b271361521c',
    category: '자연',
  },
  {
    _id: '61fe5569a1035b271361521d',
    title: '제주 특별전',

    nickname: 'jiseong4',

    posterUrl: sample,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    authorId: 'authorId61fe5569a1035b271361521d',
    category: '자연',
  },
];

interface Props {
  title: string;
}

function RecommendContainer({ title }: Props) {
  // TODO: api로 변경
  const [cards, setCards] = useState<CardData[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    let subPath = 'todays';
    if (title === '전시 예정') subPath = 'upcoming';

    // axiosInstance
    //   .get(`${PATH.GALLERY_SEARCH}/preview/${subPath}`)
    //   .then((res) => console.log(res));
  });

  const handleClick = (id: string) =>
    navigation(`${PATH.GALLERY_SEARCH}/${id}`);

  return (
    <CardLayout title={title}>
      {mockData.map((cardInfo) => (
        <Card
          key={`${title}-${cardInfo.nickname}`}
          cardInfo={cardInfo}
          handleClick={handleClick}
        />
      ))}
    </CardLayout>
  );
}

export default RecommendContainer;
