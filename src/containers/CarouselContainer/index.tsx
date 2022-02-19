import { useEffect, useState } from 'react';
import axiosInstance from '../../api/api';
import Carousel from '../../components/Carousel';
import { PATH } from '../../constants/path';
import { CardData } from '../../types/Card';

function CarouselContainer() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    axiosInstance
      .get(`${PATH.GALLERY_SEARCH}/getOnesPerCategory`, {
        cache: {
          ignoreCache: false,
        },
      })
      .then((res) => {
        if (res?.data.data) {
          const items = res.data.data.filter((item: CardData) => item !== null);
          setCards(items);
        }
      })
      .catch((e) => {
        // console.log(e);
      });
  }, []);

  return <Carousel cardInfo={cards} />;
}

export default CarouselContainer;
