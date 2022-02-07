import styled from 'styled-components';
import InputFields from '../InputFields';
import Buttons from '../Buttons';

const { ButtonOrange } = Buttons;
const { InputField } = InputFields;

interface Props {
  defaultText: string;
  value: string;
  galleryId: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

function CommentInput({
  defaultText,
  galleryId,
  value,
  onChange,
  handleClick,
}: Props) {
  return (
    <CommentWrapper>
      <UserImg />
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
`;
