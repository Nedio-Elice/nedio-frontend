import styled from 'styled-components';
import { useEffect } from 'react';
import InputFields from '../InputFields';
import Buttons from '../Buttons';
import { MyInfo } from '../../store/user';

const { ButtonOrange } = Buttons;
const { InputField, InputTextField } = InputFields;

interface Props {
  defaultText: string;
  value: string;
  user: MyInfo;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

function CommentInput({
  defaultText,
  value,
  onChange,
  handleClick,
  user,
}: Props) {
  return (
    <CommentWrapper>
      <UserImg src={user.profileURL} />
      <CommentInputField
        defaultText={defaultText}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(event.target.value)
        }
      />
      <CommentSubmit value="입력" type="submit" handleClick={handleClick} />
    </CommentWrapper>
  );
}

export default CommentInput;

const CommentWrapper = styled.form`
  margin: 24px auto;
  padding: 0px 36px;
  display: flex;
  gap: 24px;
  align-items: center;
  @media (max-width: 850px) {
    margin: 24px auto;
    width: 80%;
    min-width: 500px;
  }
`;

const UserImg = styled.img`
  display: block;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: -4px -4px 16px rgb(255 255 255 / 25%), 4px 4px 12px #bbbbbb;

  @media (max-width: 850px) {
    display: none;
  }
`;

const CommentInputField = styled(InputTextField)`
  height: 46px;
  resize: none;
  @media (max-width: 850px) {
    height: auto;
    display: block;
    margin: 12px auto;
    width: 80%;
  }
`;

const CommentSubmit = styled(ButtonOrange)`
  @media (max-width: 850px) {
    display: block;
    margin-left: auto;
  }
`;
