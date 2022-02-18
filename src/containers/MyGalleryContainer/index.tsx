import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import { CardWrapper, GalleryWrapper } from '../../styles/myPage';
import Buttons from '../../components/Buttons';
import {
  getGalClosed,
  getGalComing,
  getGalRunning,
} from '../../store/myGallery';
import { PATH } from '../../constants/path';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import makePageCount from '../../utils/makePageCount';
import GalleryTab from '../../components/GalleryTab';

function MyGallery() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const myGalleries = useAppSelector((state: RootState) => state.myGallery);
  const [currPage, setCurrPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [galleryState, setGalleryState] = useState<string>('');

  useEffect(() => {
    setPageCount(myGalleries.length);
  }, [myGalleries.length, currPage]);

  useEffect(() => {
    switch (galleryState) {
      case 'Running':
        dispatch(getGalRunning(currPage));
        setPageCount(myGalleries.length);
        break;
      case 'Coming':
        dispatch(getGalComing(currPage));
        setPageCount(myGalleries.length);
        break;
      case 'Closed':
        dispatch(getGalClosed(currPage));
        setPageCount(myGalleries.length);
        break;
      default:
        break;
    }
  }, [currPage, dispatch, galleryState, myGalleries.length]);

  const handleCardClick = (id: string) =>
    navigation(`${PATH.GALLERY_SEARCH}/${id}`);

  const changeState = (state: string) => {
    setGalleryState(state);
    setCurrPage(0);
  };

  return (
    <GalleryWrapper>
      <GalleryTab changeState={changeState} />
      <CardWrapper>
        {myGalleries.list !== undefined &&
          myGalleries.list.map((cardInfo: any, idx) => (
            <Card
              key={`${idx}`}
              cardInfo={cardInfo}
              handleClick={handleCardClick}
            />
          ))}
      </CardWrapper>
      {myGalleries.list !== undefined && (
        <Pagination
          currPage={currPage}
          pageCount={makePageCount(pageCount)}
          onClickPage={(num: number) => {
            setCurrPage(num);
          }}
        />
      )}
    </GalleryWrapper>
  );
}

export default MyGallery;
