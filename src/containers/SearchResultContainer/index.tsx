/* eslint-disable consistent-return */
import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
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
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function SearchResultContainer() {
  const searchQuery = useQueryString();
  const page = useRef(SEARCH.INIT_PAGE);
  const perPage = useRef(SEARCH.PER_PAGE);
  const lastCard = useRef(false);
  const targetRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<CardData[] | null>(null);
  const [resultKeyword, setResultKeyword] = useState('');

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const queryParam = decodeURIComponent(searchQuery.toString());
  const [queryKey, queryValue] = queryParam.split('=');

  const loadCards = useCallback(async () => {
    const customParams = {
      page: page.current,
      perPage: perPage.current,
      title: '',
      nickname: '',
      category: '',
    };

    if (!isValidQuery(queryKey, queryValue)) {
      navigation('/NotFound');
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.get<string, AxiosRequestConfig>(
        '/galleries/filtering',
        {
          params: customParams,
          paramsSerializer: (params) =>
            combineQuery(params, queryKey, queryValue),
        },
      );

      const list = listOfDisplayGalleries(res.data.data);

      if (res.data.data.length === 0) lastCard.current = true;

      return list;
    } catch (e) {
      // console.log(e);
    } finally {
      setLoading(false);
      setResultKeyword(queryValue);
      dispatch(setKeyword(queryValue));
      dispatch(setOption(queryKey));
    }
  }, [dispatch, navigation, queryKey, queryValue]);

  const searchCards = useCallback(
    async (query) => {
      if (!query) return;

      const list = await loadCards();
      if (list !== undefined) {
        setCards(list);
      }
    },
    [loadCards],
  );

  useEffect(() => {
    page.current = 1;
    lastCard.current = false;
    searchCards(searchQuery);
  }, [searchQuery, searchCards]);

  const loadMoreCards = useCallback(async () => {
    if (cards && cards.length > 0) {
      page.current += 1;
      const newCards = await loadCards();
      if (newCards !== undefined) {
        setCards([...cards, ...newCards]);
      }
    }
  }, [cards, loadCards]);

  useIntersectionObserver({
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]: any) => {
      if (isIntersecting && !loading && !lastCard.current) {
        loadMoreCards();
      }
    },
  });

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
      {cards && (
        <>
          {cards.length > 0 ? (
            <>
              {cards.map((card) => (
                <Card
                  key={card._id}
                  cardInfo={card}
                  handleClick={handleClick}
                />
              ))}
            </>
          ) : (
            <NoResult title="검색 결과가 없습니다" />
          )}
        </>
      )}
      <div ref={targetRef} />
    </CardLayout>
  );
}

export default SearchResultContainer;
