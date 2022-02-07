import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';
import Card from '../../components/Card';
import CardLayout from '../../components/CardLayout';
import { PATH } from '../../constants/path';
import { CardData } from '../../types/Card';

interface Props {
  title: string;
}

function RecommendContainer({ title }: Props) {
  const [cards, setCards] = useState<CardData[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    let subPath = 'preview/todays';
    if (title === '전시 예정') subPath = 'preview/upcoming';

    axiosInstance
      .get(`${PATH.GALLERY_SEARCH}/${subPath}`)
      .then((res) => setCards(res.data.data));
  }, [title]);

  const handleClick = (id: string) =>
    navigation(`${PATH.GALLERY_SEARCH}/${id}`);

  return (
    <CardLayout title={title}>
      {cards.map((card) => (
        <Card key={card._id} cardInfo={card} handleClick={handleClick} />
      ))}
    </CardLayout>
  );
}

export default RecommendContainer;
