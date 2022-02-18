import { useState } from 'react';
import styled from 'styled-components';
import { getComments, putComment } from '../../store/comment';
import Buttons from '../Buttons';
import { useAppDispatch } from '../../store/hooks';
import { CommentPost, CommentProps } from '../../types/Comment';
import { MESSAGE } from '../../constants/messages';
import useToast from '../../hooks/useToast';

const { ButtonMini } = Buttons;

function Comment({
  commentId,
  author,
  userId,
  galleryId,
  currPage,
  content,
  handleClickDelete,
}: CommentProps) {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const [text, setText] = useState<string>(content);
  const [update, setUpdate] = useState<boolean>(false);

  function handleChange(event: any) {
    event.preventDefault();
    setText(event.target.value);
  }

  async function handleUpdate(comment: CommentPost) {
    try {
      const response: any = await dispatch(
        putComment({ commentId: comment.commentId, content: comment.content }),
      );
      if (response.payload.message === 'success') {
        toast({
          title: '',
          message: MESSAGE.COMMENT_UPDATE_SUCCESS,
        });
      }
      await setUpdate(!update);
    } catch (e) {
      toast({
        title: '',
        message: MESSAGE.COMMENT_UPDATE_FAIL,
        type: 'error',
      });
    }
    await dispatch(getComments({ galleryId, currPage }));
  }

  return (
    <CommentContainer>
      <CommentImg src={author.profileURL} />
      <CommentContent>
        <CommentUsername>{author.nickname}</CommentUsername>
        {update === false ? (
          <CommentText>{content}</CommentText>
        ) : (
          <UpdateWrapper>
            <CommentUpdate
              value={text}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(event)
              }
            />
            <ButtonMini
              value="방명록 수정"
              handleClick={() =>
                handleUpdate({
                  commentId,
                  content: text,
                })
              }
            />
          </UpdateWrapper>
        )}
      </CommentContent>
      {author.id === userId && (
        <>
          <CommentButton onClick={() => setUpdate(!update)}>
            {update === false ? '수정' : '취소'}
          </CommentButton>
          <CommentButton onClick={() => handleClickDelete(commentId)}>
            삭제
          </CommentButton>
        </>
      )}
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.div`
  width: 550px;
  display: flex;
  flex-direction: row;
  align-items: top;
  margin: 16px auto;
  padding: 8px 16px;
  border-radius: 10px;
  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #fdfdfd,
    #fafafb,
    #f8f8f9,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f8f8f9,
    #fafafb,
    #fdfdfd,
    #ffffff
  );
  box-shadow: 10px 10px 20px #e1e2e4, -10px -10px 20px #ffffff;
  @media (max-width: 850px) {
    width: 80%;
  }
`;

const CommentContent = styled.div`
  width: 70%;
  margin-left: 24px;
  font-family: 'Pretendard-Regular';
`;

const CommentImg = styled.img`
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: 4px 4px 8px #bbbbbb;
`;

const CommentUsername = styled.p`
  line-height: 18px;
  font-family: Pretendard-Regular;
  font-style: medium;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CommentText = styled.p`
  width: 100%;
  line-height: 18px;
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-size: 14px;
  word-break: break-word;
`;

const UpdateWrapper = styled.p`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

const CommentUpdate = styled.textarea`
  width: 100%;
  line-height: 24px;
  font-family: Pretendard-Regular;
  font-style: normal;
  font-size: 14px;
  word-break: keep-all;
  padding: 8px 8px;
  resize: none;
  border: 2px transparent;
  box-sizing: border-box;
  box-shadow: rgb(204, 219, 232) 1px 1px 3px 0px inset,
    rgba(255, 255, 255, 0.5) -1px -1px 2px 0.5px inset;
  border-radius: 5px;
  &:focus {
    outline: 2px solid #f3643f;
  }
`;

const CommentButton = styled.button`
  width: 48px;
  padding: 0;
  height: 14px;
  font-size: 12px;
  color: #777777;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    color: #f3643f;
  }
`;
