import styled from 'styled-components';
import { VoidExpression } from 'typescript';

interface CommentProps {
  key: string;
  commentId: string;
  username: string;
  profileImgURL: string;
  content: string;
  update: boolean;
  handleClickDelete: (value: string) => void;
  handleClickUpdate: (value: React.SetStateAction<string>) => void;
}

function Comment({
  key,
  commentId,
  username,
  profileImgURL,
  content,
  update,
  handleClickUpdate,
  handleClickDelete,
}: CommentProps) {
  return (
    <CommentContainer>
      <CommentImg src={profileImgURL} />
      <CommentContent>
        <CommentUsername>{username}</CommentUsername>
        {update === false ? (
          <CommentText>{content}</CommentText>
        ) : (
          <CommentUpdate value={content} />
        )}
      </CommentContent>
      <CommentButton onClick={() => handleClickUpdate(commentId)}>
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
  width: 750px;
  display: flex;
  flex-direction: row;
  align-items: top;
  margin: 16px auto;
  padding-left: 96px;
`;

const CommentContent = styled.div`
  width: 407px;
  margin-left: 24px;
`;

const CommentImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const CommentUsername = styled.p`
  line-height: 18px;
  font-family: Pretendard;
  font-style: medium;
  font-size: 14px;
  margin-bottom: 8px;
`;

const CommentText = styled.p`
  width: 407px;
  line-height: 18px;
  font-family: Pretendard;
  font-style: normal;
  font-size: 14px;
  word-break: keep-all;
`;

const CommentUpdate = styled.input`
  width: 407px;
  line-height: 18px;
  font-family: Pretendard;
  font-style: normal;
  font-size: 14px;
  word-break: keep-all;
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
