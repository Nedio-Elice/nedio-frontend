import { useState } from 'react';
import styled from 'styled-components';
import { VoidExpression } from 'typescript';
import { putComment } from '../../store/comment';
import Buttons from '../Buttons';
import { useAppDispatch } from '../../store/hooks';
import { CommentPost, CommentProps } from '../../types/Comment';

const { ButtonMini } = Buttons;

function Comment({
  commentId,
  username,
  profileImgURL,
  content,
  handleClickDelete,
}: CommentProps) {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>(content);
  const [update, setUpdate] = useState<boolean>(false);

  function handleChange(event: any) {
    event.preventDefault();
    setText(event.target.value);
  }

  function handleUpdate(comment: CommentPost) {
    dispatch(
      putComment({ commentId: comment.commentId, content: comment.content }),
    );
    setUpdate(!update);
  }

  return (
    <CommentContainer>
      <CommentImg src={profileImgURL} />
      <CommentContent>
        <CommentUsername>{username}</CommentUsername>
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
      <CommentButton onClick={() => setUpdate(!update)}>
        {update === false ? '수정' : '취소'}
      </CommentButton>
      <CommentButton onClick={() => handleClickDelete(commentId)}>
        삭제
      </CommentButton>
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
  width: 90%;
  margin-left: 24px;
`;

const CommentImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const CommentUsername = styled.p`
  line-height: 18px;
  font-family: Pretendard-Regular;
  font-style: medium;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CommentText = styled.p`
  width: 90%;
  line-height: 18px;
  font-family: Pretendard;
  font-style: normal;
  font-size: 14px;
  word-break: keep-all;
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
