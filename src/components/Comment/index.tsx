import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getComments, putComment } from '../../store/comment';
import Buttons from '../Buttons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CommentPost, CommentProps } from '../../types/Comment';
import { RootState } from '../../store/root';

const { ButtonMini } = Buttons;

function Comment({
  commentId,
  author,
  authorId,
  galleryId,
  currPage,
  content,
  handleClickDelete,
}: CommentProps) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state: RootState) => state.users.userInfo._id);
  const [text, setText] = useState<string>(content);
  const [update, setUpdate] = useState<boolean>(false);

  function handleChange(event: any) {
    event.preventDefault();
    setText(event.target.value);
  }

  async function handleUpdate(comment: CommentPost) {
    await dispatch(
      putComment({ commentId: comment.commentId, content: comment.content }),
    );
    await setUpdate(!update);
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
      {authorId === userId && (
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
`;

const CommentContent = styled.div`
  width: 70%;
  margin-left: 24px;
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
  font-family: Pretendard;
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
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  box-shadow: 8px 8px 16px rgba(221, 225, 233, 0.75);
  border-radius: 5px;
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
    color: #ff6e00;
  }
`;
