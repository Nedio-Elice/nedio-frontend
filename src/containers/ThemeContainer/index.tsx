import { useNavigate } from 'react-router-dom';
import CardLayout from '../../components/CardLayout';
import ThemeCard from '../../components/ThemeCard';
import {
  animal,
  art,
  construct,
  culture,
  fashion,
  journalism,
  nature,
  person,
} from '../../constants/images';
import { PATH } from '../../constants/path';

// DELETE: 데이터 삭제
const themeList = [
  {
    title: '자연',
    imageURL: nature,
    category: 'nature',
  },
  {
    title: '인물',
    imageURL: person,
    category: 'person',
  },
  {
    title: '동물',
    imageURL: animal,
    category: 'animal',
  },
  {
    title: '예술',
    imageURL: art,
    category: 'art',
  },
  {
    title: '문화',
    imageURL: culture,
    category: 'culture',
  },
  {
    title: '건축',
    imageURL: construct,
    category: 'construct',
  },
  {
    title: '저널리즘',
    imageURL: journalism,
    category: 'journalism',
  },
  {
    title: '패션',
    imageURL: fashion,
    category: 'fashion',
  },
];

function ThemeContainer() {
  const navigation = useNavigate();

  const handleClick = (category: string) =>
    navigation(
      `${PATH.GALLERY_SEARCH}?page=1&perPage=5&title=&nickname=&category=${category}`,
    );

  return (
    <CardLayout title="원하는 주제로 전시를 찾아보세요">
      {themeList.map((theme) => (
        <ThemeCard
          key={theme.imageURL}
          item={theme}
          handleClick={handleClick}
        />
      ))}
    </CardLayout>
  );
}

export default ThemeContainer;
