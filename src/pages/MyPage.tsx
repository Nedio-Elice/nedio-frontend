import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link, useLinkClickHandler } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { RootState } from '../store/root';
import { getUser, putUser } from '../store/profile';
import axiosInstance from '../api/api';
import ProfileInfos from '../components/ProfileInfos';
import Card from '../components/Card';
import Buttons from '../components/Buttons';

const { ButtonBasic, ButtonOrange, ButtonNeumo } = Buttons;
const { ProfileInfo, ProfileTextInfo } = ProfileInfos;

function MyPage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile);

  const [profileURL, setProfileURL] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');

  useEffect(() => {
    dispatch(getUser(userId));
    setNickname(user.nickname);
    setEmail(user.email);
    setIntroduce(user.introduce);
    setProfileURL(user.profileURL);
  }, [
    dispatch,
    userId,
    user.nickname,
    user.email,
    user.introduce,
    user.profileURL,
  ]);

  if (user === null) {
    return <h1>No such user</h1>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      id: userId,
      introduce,
      contact: user.contact,
      profileURL,
      nickname,
      email,
    };
    dispatch(putUser(newUser));
  };

  const handleProfileSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newUser = {
      id: userId,
      introduce: user.introduce,
      contact: user.contact,
      profileURL,
      nickname: user.nickname,
      email: user.email,
    };
    dispatch(putUser(newUser));
  };

  return (
    <>
      <ProfileBox>
        <ProfileForm onSubmit={handleSubmit}>
          <UserImg src={user.profileURL} />
          <ButtonBasic
            value="사진 업로드"
            type="submit"
            handleClick={handleProfileSubmit}
          />
          <InfoWrapper>
            <InfoSubWrapper>
              <ProfileInfo
                name="이름"
                defaultText={user.nickname}
                value={nickname}
                width="80%"
                onChange={setNickname}
              />
              <br />
              <ProfileInfo
                name="이메일"
                defaultText={user.email}
                value={email}
                width="80%"
                onChange={setEmail}
              />
            </InfoSubWrapper>
            <InfoSubWrapper>
              <ProfileTextInfo
                name="소개"
                defaultText={user.introduce}
                value={introduce}
                width="80%"
                onChange={setIntroduce}
              />
            </InfoSubWrapper>
            <ButtonWrapperRight>
              <ButtonOrange
                value="정보 변경"
                type="submit"
                handleClick={() => {}}
              />
            </ButtonWrapperRight>
          </InfoWrapper>
        </ProfileForm>
      </ProfileBox>
      <MyGalleryBox>
        <GalleryWrapper>
          <ButtonWrapperLeft>
            <ButtonNeumo value="운영중인 전시" handleClick={() => {}} />
            <ButtonNeumo value="종료된 전시" handleClick={() => {}} />
          </ButtonWrapperLeft>
          <GalleryTab />
        </GalleryWrapper>
      </MyGalleryBox>
    </>
  );
}

export default MyPage;

const ProfileBox = styled.div`
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(180deg, #f2f3f5 0%, #ffffff 48.44%, #f2f3f5 100%);
`;

const ProfileForm = styled.form`
  margin: 0 auto;
  padding: 72px;
  width: 1072px;
`;

const UserImg = styled.img`
  display: inline-block;
  height: 192px;
  width: 192px;
  border-radius: 50%;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const InfoSubWrapper = styled.div`
  width: 50%;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapperRight = styled.div`
  display: flex;
  margin: 24px 0 0 auto;
`;

const ButtonWrapperLeft = styled.div`
  display: flex;
  padding: 24px auto 0 0;
  gap: 48px;
`;

const MyGalleryBox = styled.div`
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(180deg, #f2f3f5 0%, #ffffff 48.44%, #f2f3f5 100%);
`;

const GalleryWrapper = styled.div`
  margin: 0 auto;
  padding: 0 72px 72px 72px;
  width: 1072px;
`;

const GalleryTab = styled.div`
  width: 100%;
`;
