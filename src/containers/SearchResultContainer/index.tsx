/* eslint-disable prefer-const */
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../api/api';
import Card from '../../components/Card';
import CardLayout from '../../components/CardLayout';
import NoResult from '../../components/NoResult';
import { PATH } from '../../constants/path';
import { SEARCH } from '../../constants/search';
import useQueryString from '../../hooks/useQueryString';
import { useAppDispatch } from '../../store/hooks';
import { setKeyword, setOption } from '../../store/search';
import { CardData } from '../../types/Card';
import { listOfDisplayGalleries } from '../../utils/galleryEdit';
import { combineQuery, isValidQuery } from '../../utils/query';

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
    let [queryKey, queryValue] = queryParam.split('=');

    if (!isValidQuery(queryKey, queryValue)) {
      navigation('/NotFound');
      return;
    }
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
        paramsSerializer: (params) =>
          combineQuery(params, queryKey, queryValue),
      })
      .then((res) => {
        const list = listOfDisplayGalleries(res.data.data);
        setCards(list);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setResultKeyword(queryValue);
        dispatch(setKeyword(queryValue));
        dispatch(setOption(queryKey));
      });
  }, [page, perPage, query, dispatch, navigation]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [resultKeyword]);

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
        <NoResult title="검색 결과가 없습니다" />
      )}
    </CardLayout>
  );
}

export default SearchResultContainer;
