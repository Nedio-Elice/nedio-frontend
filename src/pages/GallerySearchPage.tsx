import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../api/api';
import Card from '../components/Card';
import CardLayout from '../components/CardLayout';
import { PATH } from '../constants/path';
import { SEARCH } from '../constants/search';
import useQueryString from '../hooks/useQueryString';
import { CardData } from '../types/Card';

function GallerySearchPage() {
  const query = useQueryString();
  const [page, setPage] = useState(SEARCH.INIT_PAGE);
  const [perPage, setPerPage] = useState(SEARCH.PER_PAGE);
  const [cards, setCards] = useState<CardData[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(
        `/galleries/filtering?page=${page}&perPage=${perPage}&${decodeURIComponent(
          query.toString(),
        )}`,
      )
      .then((res) => {
        console.log('check filtering', res.data.data);
        setCards(res.data.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }, [page, perPage, query]);

  const handleClick = (id: string) =>
    navigation(`${PATH.GALLERY_SEARCH}/${id}`);

  return (
    <Container>
      <ContentsPadding>
        <CardLayout title="검색결과">
          {cards.map((card) => (
            <Card key={card._id} cardInfo={card} handleClick={handleClick} />
          ))}
        </CardLayout>
      </ContentsPadding>
    </Container>
  );
}

export default GallerySearchPage;

const Container = styled.div`
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 49.48%,
    rgba(242, 243, 245, 0.977401) 100%,
    #f2f3f5 100%
  );
  user-select: none;
  width: 100vw;
  min-height: 100vh;
`;

const ContentsPadding = styled.article`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 70px 0;
`;
