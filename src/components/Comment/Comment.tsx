import styled from 'styled-components';

interface CommentProps {
  username: string;
  profileImgURL: string;
  content: string;
  handleClickDelete: (event: React.MouseEvent) => void;
  handleClickUpdate: (event: React.MouseEvent) => void;
}

function Comment({
  username,
  profileImgURL,
  content,
  handleClickUpdate,
  handleClickDelete,
}: CommentProps) {
  return (
    <CommentContainer>
      <CommentImg src={profileImgURL} />
      <CommentContent>
        <CommentUsername>{username}</CommentUsername>
        <CommentText>{content}</CommentText>
      </CommentContent>
      <CommentButton onClick={handleClickUpdate}>수정</CommentButton>
      <CommentButton onClick={handleClickDelete}>삭제</CommentButton>
    </CommentContainer>
  );
}

export default Comment;

const CommentContainer = styled.div`
  width: 750px;
  display: flex;
  flex-direction: row;
  align-items: top;
  margin-top: 16px;
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
  line-height: 18px;
  font-family: Pretendard;
  font-style: normal;
  font-size: 14px;
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
