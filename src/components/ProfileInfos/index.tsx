import styled from 'styled-components';
import InputFields from '../InputFields';

const { InputField, InputTextField } = InputFields;

interface Props {
  name: string;
  defaultText: string | undefined;
  value: string;
  width: string;
  height?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function ProfileInfo({
  name,
  defaultText,
  value,
  width,
  height,
  onChange,
}: Props) {
  return (
    <>
      <InfoType>{name}</InfoType>
      <InputField
        defaultText={defaultText}
        value={value}
        width={width}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
      />
    </>
  );
}

function ProfileTextInfo({
  name,
  defaultText,
  value,
  width,
  height,
  onChange,
}: Props) {
  return (
    <>
      <InfoType>{name}</InfoType>
      <InputTextField
        defaultText={defaultText}
        value={value}
        width={width}
        height={height}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(event.target.value)
        }
      />
    </>
  );
}

ProfileInfo.defaultProps = {
  height: '40px',
};

ProfileTextInfo.defaultProps = {
  height: '200px',
};

export default { ProfileInfo, ProfileTextInfo };

const InfoType = styled.h2`
  font-family: Pretendard-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  margin: 12px 0;
`;
