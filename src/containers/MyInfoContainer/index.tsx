import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import {
  ButtonWrapperRight,
  InfoSubWrapper,
  InfoWrapper,
  UserImg,
} from '../../styles/myPage';
import InputField from '../../components/InputFields';
import ProfileInfos from '../../components/ProfileInfos';
import Buttons from '../../components/Buttons';
import axiosInstance from '../../api/api';
import { updateUser } from '../../store/user';

const { ProfileInfo, ProfileTextInfo } = ProfileInfos;
const { ButtonOrange } = Buttons;
const { InputProfile, InputProfileLabel } = InputField;

interface ImageResponse {
  success: boolean;
  message: string;
  url: string;
}

function MyInformation() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const user = useAppSelector((state: RootState) => state.users);
  const [profileURL, setProfileURL] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [introduce, setIntroduce] = useState('');

  useEffect(() => {
    setProfileURL(user.userInfo.profileURL);
    setNickname(user.userInfo.nickname);
    setEmail(user.userInfo.email);
    setIntroduce(user.userInfo.introduce ? user.userInfo.introduce : '');
  }, [
    dispatch,
    user.userInfo,
    user.userInfo.email,
    user.userInfo.introduce,
    user.userInfo.nickname,
    user.userInfo.profileURL,
  ]);

  const handleImgUpdate = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    if (event.target.files === null) return;
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('upload', file);

    const response = await axiosInstance.post<ImageResponse>(
      `uploadImage`,
      formData,
    );
    const newUser = {
      _id: user.userInfo._id,
      introduce,
      contact: user.userInfo.contact,
      profileURL: response.data.url,
      nickname,
      email,
    };
    dispatch(updateUser(newUser));
  };

  const handleSubmit = () => {
    const newUser = {
      _id: user.userInfo._id,
      introduce,
      contact: user.userInfo.contact,
      profileURL,
      nickname,
      email,
    };

    dispatch(updateUser(newUser));
  };

  if (!user.isSignIn) {
    navigation('/');
  }

  return (
    <>
      <UserImg src={profileURL} />
      <InputProfileLabel>
        사진 업로드
        <InputProfile onChange={handleImgUpdate} />
      </InputProfileLabel>
      <InfoWrapper>
        <InfoSubWrapper>
          <ProfileInfo
            name="이름"
            defaultText={user.userInfo.nickname}
            value={nickname}
            width="100%"
            onChange={setNickname}
          />
          <br />
          <ProfileInfo
            name="이메일"
            defaultText={user.userInfo.email}
            value={email}
            width="100%"
            onChange={setEmail}
          />
        </InfoSubWrapper>
        <InfoSubWrapper>
          <ProfileTextInfo
            name="소개"
            defaultText={user.userInfo.introduce}
            value={introduce}
            width="100%"
            onChange={setIntroduce}
          />
        </InfoSubWrapper>
        <ButtonWrapperRight>
          <ButtonOrange
            value="정보 변경"
            type="submit"
            handleClick={handleSubmit}
          />
        </ButtonWrapperRight>
      </InfoWrapper>
    </>
  );
}

export default MyInformation;
