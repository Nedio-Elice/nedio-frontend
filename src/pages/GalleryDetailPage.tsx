/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { RootState } from '../store/root';
import { getComments, postComment, deleteComment } from '../store/comment';
import axiosInstance from '../api/api';
import Buttons from '../components/Buttons';
import Comment from '../components/Comment';
import CommentInput from '../components/CommentInput';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Gallery } from '../types/GalleryDetail';
import makePageCount from '../utils/makePageCount';
import { getUser, initialState, User } from '../store/profile';
import { Background, ButtonWrapper } from '../styles/galleryDetailPage';
import GalleryInformation from '../containers/GalleryInfoContainer';
import { PATH } from '../constants/path';

const { ButtonBasic } = Buttons;

function GalleryDetailPage() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const comments = useAppSelector((state: RootState) => state.comment);
  const user = useAppSelector((state: RootState) => state.profile);

  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [currPage, setCurrPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(5);
  const [newComment, setNewComment] = useState<string>('');
  const { galleryId } = useParams();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        await axiosInstance
          .get<Gallery>(`galleries/${galleryId}`)
          .then((response: AxiosResponse) => {
            setGallery(response.data.data);
          });
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

  const handleHallButtonClick = (id: string) =>
    navigation(`${PATH.HALL}/${id}`);

  if (gallery === null) {
    return <Background />;
  }

  return (
    <Background>
      <GalleryInformation gallery={gallery} galleryId={galleryId} user={user} />
      <ButtonWrapper>
        {gallery.halls !== null &&
          gallery.halls.map((hall, idx) => {
            return (
              <ButtonBasic
                key={hall.hallObjectId}
                value={`${idx + 1}관`}
                handleClick={() => handleHallButtonClick(hall.hallObjectId)}
              />
            );
          })}
      </ButtonWrapper>
      <CommentInput
        defaultText="방명록을 입력해 주세요."
        value={newComment}
        onChange={setNewComment}
        handleClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleSubmit(event)
        }
        user={user}
      />
      {comments !== null &&
        comments.data.map((c: any) => {
          // eslint-disable-next-line no-underscore-dangle
          return (
            <Comment
              key={c._id}
              commentId={c._id}
              userId={user._id}
              author={c.author}
              galleryId={galleryId}
              currPage={currPage}
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
