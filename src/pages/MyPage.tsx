import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import axios, { AxiosResponse, AxiosError } from 'axios';
import axiosInstance from '../api/api';
import InputFields from '../components/InputFields';
import Buttons from '../components/Buttons';

const { ButtonBasic, ButtonOrange, ButtonNeumo } = Buttons;
const { InputField, InputTextField } = InputFields;

interface User {
  _id: string;
  introduce: string;
  contact: string;
  profileURL: string;
  nickname: string;
  email: string;
}

function MyPage() {
  const [user, setUser] = useState<User | null>(null);
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const { userId } = useParams();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axiosInstance.put<User>(`api/users/${userId}`, {
        nickname,
        email,
        introduce,
        profileURL: user?.profileURL,
        contact: user?.contact,
      });
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axiosInstance
          .get<User>(`api/users/${userId}`)
          .then((response: AxiosResponse) => {
            setUser(response.data);
            setNickname(response.data.nickname);
            setEmail(response.data.email);
            setIntroduce(response.data.introduce);
          });
      } catch (error) {
        const err = error as AxiosError;
        throw new Error(err.response?.data);
      }
    };

    fetchUser();
  }, [userId]);

  if (user === null) {
    return <h1>No such user</h1>;
  }

  return (
    <>
      <ProfileBox>
        <ProfileForm onSubmit={handleSubmit}>
          <UserImg src={user.profileURL} />
          <ButtonBasic
            value="사진 업로드"
            type="submit"
            handleClick={() => {}}
          />
          <InfoWrapper>
            <InfoSubWrapper>
              <InfoType>이름</InfoType>
              <InputField
                defaultText={user.nickname}
                value={nickname}
                width="80%"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setNickname(event.target.value)
                }
              />
              <br />
              <InfoType>이메일</InfoType>
              <InputField
                value={email}
                width="80%"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
              />
            </InfoSubWrapper>
            <InfoSubWrapper>
              <InfoType>소개</InfoType>
              <InputTextField
                defaultText={user.introduce}
                value={introduce}
                width="80%"
                height="200px"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setIntroduce(e.target.value)
                }
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

const InfoType = styled.h2`
  font-family: Pretendard-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 8px;
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
