import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import CommentInput from '../../components/CommentInput';
import Comment from '../../components/Comment';
import { MESSAGE } from '../../constants/messages';
import useToast from '../../hooks/useToast';
import { deleteComment, getComments, postComment } from '../../store/comment';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import { CommentTitle, NoCommentTag } from '../../styles/galleryDetailPage';
import { Gallery } from '../../types/GalleryDetail';
import { isOpen } from '../../utils/date';
import makePageCount from '../../utils/makePageCount';
import Pagination from '../../components/Pagination';

interface CommentProps {
  gallery: Gallery;
  galleryId: string | undefined;
}

function GalleryComment({ gallery, galleryId }: CommentProps) {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state: RootState) => state.comment);
  const user = useAppSelector((state: RootState) => state.user);
  const toast = useToast();

  const [newComment, setNewComment] = useState<string>('');
  const [currPage, setCurrPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(5);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        dispatch(getComments({ galleryId, currPage }));
        setPageCount(makePageCount(comments.count));
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };
    fetchComments();
  }, [dispatch, galleryId, currPage, comments.count]);

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

  return (
    <>
      <CommentTitle>방명록</CommentTitle>
      {isOpen({
        startDate: new Date(gallery.startDate),
        endDate: new Date(gallery.endDate),
      }) &&
        user.isSignIn && (
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
    </>
  );
}

export default GalleryComment;
