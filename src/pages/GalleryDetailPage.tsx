/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosResponse, AxiosError } from 'axios';
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
import {
  Background,
  ButtonWrapper,
  CommentTitle,
  GalleryWrapper,
  NoCommentTag,
} from '../styles/galleryDetailPage';
import GalleryInformation from '../containers/GalleryInfoContainer';
import { MESSAGE } from '../constants/messages';
import useToast from '../hooks/useToast';

const { ButtonBasic } = Buttons;

function GalleryDetailPage() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const toast = useToast();
  const comments = useAppSelector((state: RootState) => state.comment);
  const user = useAppSelector((state: RootState) => state.user);

  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [currPage, setCurrPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(5);
  const [newComment, setNewComment] = useState<string>('');
  const { galleryId } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        dispatch(getComments({ galleryId, currPage }));
        setPageCount(makePageCount(comments.count));
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };
    fetchInfo();
  }, [dispatch, galleryId, currPage, comments.count]);

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

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await dispatch(postComment({ galleryId, content: newComment }));
    await setNewComment('');
    await dispatch(getComments({ galleryId, currPage }));
  }

  async function handleDelete(commentId: string) {
    try {
      const response: any = await dispatch(deleteComment(commentId));
      if (response.payload.message === 'success') {
        toast({
          title: '',
          message: MESSAGE.COMMENT_DELETE_SUCCESS,
        });
      }
    } catch (e) {
      toast({
        title: '',
        message: MESSAGE.COMMENT_DELETE_FAIL,
        type: 'error',
      });
    }
    await dispatch(getComments({ galleryId, currPage }));
  }

  const handleHallButtonClick = (id: string) => navigation(`/halls/${id}`);

  function isOpen(startDate: string, endDate: string): boolean {
    return (
      Date.parse(startDate) < Date.now() && Date.parse(endDate) > Date.now()
    );
  }

  if (gallery === null) {
    return <Background />;
  }

  return (
    <Background>
      <GalleryWrapper>
        <GalleryInformation
          gallery={gallery}
          galleryId={galleryId}
          user={user.userInfo}
        />
        <ButtonWrapper>
          {isOpen(gallery.startDate, gallery.endDate) &&
            gallery.halls !== null &&
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
        <CommentTitle>방명록</CommentTitle>
        {isOpen(gallery.startDate, gallery.endDate) && user.isSignIn && (
          <CommentInput
            defaultText="방명록을 입력해 주세요."
            value={newComment}
            onChange={setNewComment}
            handleClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(event)
            }
            user={user.userInfo}
          />
        )}
        {comments.data !== undefined &&
          comments.data.map((c: any) => {
            // eslint-disable-next-line no-underscore-dangle
            return (
              <Comment
                key={c._id}
                commentId={c._id}
                userId={user.userInfo._id}
                author={c.author}
                galleryId={galleryId}
                currPage={currPage}
                content={c.content}
                handleClickDelete={() => handleDelete(c._id)}
              />
            );
          })}
        {comments.data !== undefined && comments.data.length > 0 ? (
          <Pagination
            currPage={currPage}
            pageCount={pageCount}
            onClickPage={(num: number) => {
              setCurrPage(num);
            }}
          />
        ) : (
          <NoCommentTag>등록된 방명록이 없습니다.</NoCommentTag>
        )}
      </GalleryWrapper>
    </Background>
  );
}

export default GalleryDetailPage;
