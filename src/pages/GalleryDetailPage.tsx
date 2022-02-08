/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { RootState } from '../store/root';
import { getComments, postComment, deleteComment } from '../store/comment';
import axiosInstance from '../api/api';
import Buttons from '../components/Buttons';
import InputFields from '../components/InputFields';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CommentSingle } from '../types/Comment';
import { Gallery } from '../types/GalleryDetail';
import makePageCount from '../utils/makePageCount';

const { ButtonBasic, ButtonOrange } = Buttons;
const { InputField } = InputFields;

type Comments = { data: Array<CommentSingle> };

function formatDateString(date: string): string {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${year}.${month}.${day}`;
}

function GalleryDetailPage() {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state: RootState) => state.comment);

  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [currPage, setCurrPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(5);
  const [newComment, setNewComment] = useState<string>('');
  const { galleryId } = useParams();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        await axiosInstance
          .get<Gallery>(`galleries/${galleryId}`)
          .then((response: AxiosResponse) => setGallery(response.data.data));
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };
    fetchGallery();
  }, [galleryId]);

  useEffect(() => {
    dispatch(getComments({ galleryId, currPage }));
    setPageCount(makePageCount(comments.count));
  }, [dispatch, galleryId, currPage, comments.count]);

  if (gallery === null) {
    return <Background />;
  }

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await dispatch(postComment({ galleryId, content: newComment }));
    await setNewComment('');
    await dispatch(getComments({ galleryId, currPage }));
  }

  async function handleDelete(commentId: string) {
    await dispatch(deleteComment(commentId));
    await dispatch(getComments({ galleryId, currPage }));
  }

  return (
    <Background>
      <GalleryInfoWrapper>
        <GalleryPoster src={gallery.posterUrl} />
        <GalleryInfo>
          <GalleryTitle>{gallery.title}</GalleryTitle>
          <GalleryPeriod>
            기간: {formatDateString(gallery.startDate)} -{' '}
            {formatDateString(gallery.endDate)}
          </GalleryPeriod>
          <GalleryDescription>{gallery.description}</GalleryDescription>
          <AuthorProfile>
            <AuthorImg />
            <AuthorInfo>
              <AuthorName>{gallery.author.nickname}</AuthorName>
              <AuthorEmail>{gallery.author.email}</AuthorEmail>
            </AuthorInfo>
          </AuthorProfile>
        </GalleryInfo>
      </GalleryInfoWrapper>
      <ButtonWrapper>
        <Link to="/">
          <ButtonBasic value="1관" handleClick={() => {}} />
        </Link>
        <Link to="/">
          <ButtonBasic value="2관" handleClick={() => {}} />
        </Link>
        <Link to="/">
          <ButtonBasic value="3관" handleClick={() => {}} />
        </Link>
      </ButtonWrapper>
      <CommentInput
        defaultText="방명록을 입력해 주세요."
        value={newComment}
        onChange={setNewComment}
        handleClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleSubmit(event)
        }
      />
      {comments !== null &&
        comments.data.map((c) => {
          // eslint-disable-next-line no-underscore-dangle
          return (
            <Comment
              key={c._id}
              commentId={c._id}
              authorId={c.authorId}
              galleryId={galleryId}
              currPage={currPage}
              profileImgURL="/"
              content={c.content}
              handleClickDelete={() => handleDelete(c._id)}
            />
          );
        })}
      {comments.data !== null && (
        <Pagination
          currPage={currPage}
          pageCount={pageCount}
          onClickPage={(num: number) => {
            setCurrPage(num);
          }}
        />
      )}
    </Background>
  );
}

export default GalleryDetailPage;

const Background = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 48.44%,
    rgba(242, 243, 245, 0.9375) 100%
  );
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

const GalleryInfoWrapper = styled.div`
  margin: 96px auto 48px auto;
  display: flex;
`;

const GalleryPoster = styled.img`
  width: 286px;
  height: 390px;
  border-radius: 10px;
`;

const GalleryInfo = styled.div`
  width: 569px;
  margin-left: 96px;
  position: relative;
`;

const GalleryTitle = styled.h1`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  font-size: 36px;
`;

const GalleryPeriod = styled.p`
  margin-top: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #a8a8a8;
`;

const GalleryDescription = styled.p`
  margin: 48px 0;
  min-height: 115px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const AuthorProfile = styled.div`
  width: fit-content;
  margin-left: auto;
  display: flex;
  align-items: flex-end;
`;

const AuthorImg = styled.img`
  display: inline-block;
  bottom: 0;
  height: 96px;
  width: 96px;
  border-radius: 50%;
`;

const AuthorInfo = styled.div`
  margin-left: 24px;
  position: relative;
`;

const AuthorName = styled.h2`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
`;

const AuthorEmail = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-decoration-line: underline;
  color: #777777;
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin: 12px auto;
  display: flex;
  gap: 36px;
`;
