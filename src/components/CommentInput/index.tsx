import styled from 'styled-components';
import { useEffect } from 'react';
import InputFields from '../InputFields';
import Buttons from '../Buttons';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import { getUser, User } from '../../store/profile';

const { ButtonOrange } = Buttons;
const { InputField } = InputFields;

interface Props {
  defaultText: string;
  value: string;
  user: User;
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
      <InputField
        defaultText={defaultText}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
      />
      <ButtonOrange value="입력" type="submit" handleClick={handleClick} />
    </CommentWrapper>
  );
}

export default CommentInput;

const CommentWrapper = styled.form`
  margin: 24px auto;
  display: flex;
  gap: 24px;
  align-items: center;
`;

const UserImg = styled.img`
  display: inline-block;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  box-shadow: -4px -4px 16px rgb(255 255 255 / 25%), 4px 4px 12px #bbbbbb;
`;
