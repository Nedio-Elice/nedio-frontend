import Card from '../../components/Card';
import CardLayout from '../../components/CardLayout';
import { sample, sample2, sample3 } from '../../constants/images';

// DELETE: 데이터 삭제
const mockData = [
  {
    title: '제주 특별전',
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
    isOpened: false,
  },
  {
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
    isOpened: false,
  },
  {
    title: '제주 특별전',
    author: {
      nickname: 'jiseong4',
      contact: '010-1234-5678',
      email: 'example@gmail.com',
    },
    posterUrl: sample,
    description: 'This is...',
    startDate: new Date(2022, 0, 25),
    endDate: new Date(),
    isOpened: false,
  },
];

interface Props {
  title: string;
}

function RecommendContainer({ title }: Props) {
  // TODO: api로 변경

  return (
    <CardLayout title={title}>
      {mockData.map((cardInfo) => (
        <Card
          key={`${title}-${cardInfo.author.nickname}`}
          cardInfo={cardInfo}
        />
      ))}
    </CardLayout>
  );
}

export default RecommendContainer;
