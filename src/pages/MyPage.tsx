import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams, Link, useLinkClickHandler } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { RootState } from '../store/root';
import { getUser, putUser } from '../store/profile';
import axiosInstance from '../api/api';
import ProfileInfos from '../components/ProfileInfos';
import Pagination from '../components/Pagination';
import Buttons from '../components/Buttons';
import InputField from '../components/InputFields';
import { getGalleries, Gallery } from '../store/myGallery';
import { sample, sample2, sample3 } from '../constants/images';

interface ImageResponse {
  success: boolean;
  message: string;
  url: string;
}

const { ButtonBasic, ButtonOrange, ButtonNeumo } = Buttons;
const { ProfileInfo, ProfileTextInfo } = ProfileInfos;
const { InputProfile, InputProfileLabel } = InputField;

function MyPage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile);
  const myGalleries = useSelector((state: RootState) => state.myGallery);

  const [profileURL, setProfileURL] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const [currPage, setCurrPage] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currGallery, setCurrGallery] = useState<Array<Gallery>>([]);
  const [galleryState, setGalleryState] = useState<string>('Running');

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getGalleries());
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

  const handleImgUpdate = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    if (event.target.files === null) return;
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('upload', file);

    try {
      const response = await axiosInstance.post<ImageResponse>(
        `/api/uploadImage`,
        formData,
      );
      setProfileURL(response.data.url);
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.response?.data);
    }
  };

  const handleClick = () => {
    let filteredGalleries: Array<Gallery> = [];
    if (galleryState === 'Running') {
      filteredGalleries = myGalleries.filter(
        (g) =>
          Date.parse(g.startDate) < Date.now() &&
          Date.parse(g.endDate) > Date.now(),
      );
    } else if (galleryState === 'Coming') {
      filteredGalleries = myGalleries.filter(
        (g) => Date.parse(g.startDate) > Date.now(),
      );
    } else if (galleryState === 'Closed') {
      filteredGalleries = myGalleries.filter(
        (g) => Date.parse(g.startDate) < Date.now(),
      );
    }

    setPageCount(filteredGalleries.length);

    const currentGalleries = [];

    for (let i = 8 * currPage; i < 8; i += 1) {
      if (filteredGalleries[i]) currentGalleries.push(filteredGalleries[i]);
    }
    setCurrGallery(currentGalleries);
  };

  return (
    <>
      <ProfileBox>
        <ProfileForm onSubmit={handleSubmit}>
          <UserImg src={profileURL} />
          <InputProfileLabel>
            사진 업로드
            <InputProfile onChange={handleImgUpdate} />
          </InputProfileLabel>

          <InfoWrapper>
            <InfoSubWrapper>
              <ProfileInfo
                name="이름"
                defaultText={user.nickname}
                value={nickname}
                width="100%"
                onChange={setNickname}
              />
              <br />
              <ProfileInfo
                name="이메일"
                defaultText={user.email}
                value={email}
                width="100%"
                onChange={setEmail}
              />
            </InfoSubWrapper>
            <InfoSubWrapper>
              <ProfileTextInfo
                name="소개"
                defaultText={user.introduce}
                value={introduce}
                width="100%"
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
            <ButtonNeumo
              value="운영중인 전시"
              handleClick={setGalleryState('Running')}
            />
            <ButtonNeumo
              value="예정된 전시"
              handleClick={setGalleryState('Coming')}
            />
            <ButtonNeumo
              value="종료된 전시"
              handleClick={setGalleryState('Closed')}
            />
          </ButtonWrapperLeft>
          <CardWrapper>
            {/* {currGallery.map((cardInfo: any, idx) => (
              <Card key={`${idx}`} cardInfo={cardInfo} />
            ))} */}
          </CardWrapper>
          <Pagination
            currPage={currPage}
            pageCount={Math.floor(pageCount / 8) + 1}
            onClickPage={(num: number) => {
              setCurrPage(num);
            }}
          />
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
  padding: 72px 48px 0 0;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapperRight = styled.div`
  display: flex;
  margin: 24px 48px 0 auto;
`;

const ButtonWrapperLeft = styled.div`
  display: flex;
  margin-bottom: 48px;
  gap: 48px;
`;

const MyGalleryBox = styled.div`
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(180deg, #f2f3f5 0%, #ffffff 48.44%, #f2f3f5 100%);
`;

const GalleryWrapper = styled.div`
  margin: 0 auto;
  padding: 0 0 72px 0;
  width: 1072px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  gap: 50px 24px;
  margin-bottom: 48px;
`;
