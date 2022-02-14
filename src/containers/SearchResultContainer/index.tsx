import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../../api/api';
import Card from '../../components/Card';
import CardLayout from '../../components/CardLayout';
import { noResults } from '../../constants/images';
import { PATH } from '../../constants/path';
import { SEARCH } from '../../constants/search';
import useQueryString from '../../hooks/useQueryString';
import { useAppDispatch } from '../../store/hooks';
import { setKeyword } from '../../store/search';
import { CardData } from '../../types/Card';

function SearchResultContainer() {
  const query = useQueryString();
  const [page, setPage] = useState(SEARCH.INIT_PAGE);
  const [perPage, setPerPage] = useState(SEARCH.PER_PAGE);
  const [cards, setCards] = useState<CardData[]>();
  const [resultKeyword, setResultKeyword] = useState('');
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  // URL 관리
  useEffect(() => {
    const queryParam = decodeURIComponent(query.toString());
    const [queryKey, queryValue] = queryParam.split('=');
    const customParams = {
      page,
      perPage,
      title: '',
      nickname: '',
      category: '',
    };

    axiosInstance
      .get<string, AxiosRequestConfig>('/galleries/filtering', {
        params: customParams,
        paramsSerializer: (params) => {
          return Object.entries({ ...params, [queryKey]: queryValue })
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        },
      })
      .then((res) => {
        setCards(res.data.data);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setResultKeyword(queryValue);
        dispatch(setKeyword(queryValue));
      });
  }, [page, perPage, query, dispatch]);

  const handleClick = (id: string) =>
    navigation(`${PATH.GALLERY_SEARCH}/${id}`);

  return (
    <CardLayout title={`검색 결과: ${resultKeyword}`}>
      {cards && cards.length > 0 ? (
        <>
          {cards.map((card) => (
            <Card key={card._id} cardInfo={card} handleClick={handleClick} />
          ))}
        </>
      ) : (
        <NoResultsWrapper>
          <NoResultsImg src={noResults} />
          <NoResultsTitle>검색 결과가 없습니다</NoResultsTitle>
        </NoResultsWrapper>
      )}
    </CardLayout>
  );
}

export default SearchResultContainer;

const NoResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoResultsImg = styled.img`
  width: 450px;
  height: 450px;
`;

const NoResultsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
