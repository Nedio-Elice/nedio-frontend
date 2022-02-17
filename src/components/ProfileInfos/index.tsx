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
  edit: boolean;
}

function ProfileInfo({
  name,
  defaultText,
  value,
  width,
  height,
  onChange,
  edit,
}: Props) {
  return (
    <>
      <InfoType>{name}</InfoType>
      {edit ? (
        <InputField
          defaultText={defaultText}
          value={value}
          width={width}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
        />
      ) : (
        <InfoDiv>{value}</InfoDiv>
      )}
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
  edit,
}: Props) {
  return (
    <>
      <InfoType>{name}</InfoType>
      {edit ? (
        <InputTextField
          defaultText={defaultText}
          value={value}
          width={width}
          height={height}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(event.target.value)
          }
        />
      ) : (
        <InfoDiv>{value}</InfoDiv>
      )}
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
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  margin: 12px 0;
  color: transparent;
  background: #bbbbbb;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

const InfoDiv = styled.div`
  font-family: Pretendard-Regular;
  font-style: normal;
  font-size: 18px;
  padding: 0 16px;
  margin-bottom: 24px;
  color: #666666;
`;
