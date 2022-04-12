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
import { PATH } from '../../constants/path';
import useToast from '../../hooks/useToast';
import { MESSAGE } from '../../constants/messages';

const { ProfileInfo, ProfileTextInfo } = ProfileInfos;
const { ButtonOrange, ButtonEdit } = Buttons;
const { InputProfile, InputProfileLabel } = InputField;

interface ImageResponse {
  success: boolean;
  message: string;
  url: string;
}

function MyInformation() {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const toast = useToast();
  const user = useAppSelector((state: RootState) => state.user);

  const [profileURL, setProfileURL] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [edit, setEdit] = useState(false);

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
    try {
      const message = await dispatch(updateUser(newUser));
      if (message === 'success') {
        toast({
          title: '',
          message: MESSAGE.UPDATE_SUCCESS,
        });
      }
    } catch (e) {
      toast({
        title: '',
        message: MESSAGE.UPDATE_FAILED,
        type: 'error',
      });
    }
  };

  const handleSubmit = async () => {
    const newUser = {
      _id: user.userInfo._id,
      introduce,
      contact: user.userInfo.contact,
      profileURL,
      nickname,
      email,
    };

    try {
      const message = await dispatch(updateUser(newUser));
      if (message === 'success') {
        toast({
          title: '',
          message: MESSAGE.UPDATE_SUCCESS,
        });
      }
    } catch (e) {
      toast({
        title: '',
        message: MESSAGE.UPDATE_FAILED,
        type: 'error',
      });
    }
  };

  if (!user.isSignIn) {
    navigation(PATH.MAIN, { replace: true });
  }

  return (
    <>
      <InfoWrapper>
        <InfoSubWrapper>
          <UserImg src={profileURL} />
          <InputProfileLabel>
            프로필 업로드
            <InputProfile onChange={handleImgUpdate} />
          </InputProfileLabel>
        </InfoSubWrapper>
        <InfoSubWrapper>
          <ButtonWrapperRight>
            <ButtonEdit
              value="수정"
              handleClick={() => setEdit(!edit)}
              edit={edit}
            />
          </ButtonWrapperRight>
          <ProfileInfo
            name="이름"
            defaultText={user.userInfo.nickname}
            value={nickname}
            width="100%"
            onChange={setNickname}
            edit={edit}
          />
          <ProfileInfo
            name="이메일"
            defaultText={user.userInfo.email}
            value={email}
            width="100%"
            onChange={setEmail}
            edit={edit}
          />
          <ProfileTextInfo
            name="소개"
            defaultText={user.userInfo.introduce}
            value={introduce}
            width="100%"
            onChange={setIntroduce}
            edit={edit}
          />
          <div style={{ marginTop: '24px' }} />
          <ButtonWrapperRight>
            {edit && (
              <ButtonOrange
                value="정보 변경"
                type="submit"
                handleClick={handleSubmit}
              />
            )}
          </ButtonWrapperRight>
        </InfoSubWrapper>
      </InfoWrapper>
    </>
  );
}

export default MyInformation;
