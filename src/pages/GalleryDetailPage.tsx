import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import Buttons from '../components/Buttons/Buttons';
import InputField from '../components/InputField/InputField';
import Comment from '../components/Comment/Comment';

const { ButtonOrange } = Buttons;

interface Gallery {
  _id: string;
  posterUrl: string;
  description: string;
  closeDate: string;
  openDate: string;
  category: string;
  title: string;
  authorId: string;
}

function formatDateString(date: string): string {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${year}.${month}.${day}`;
}

function GalleryDetailPage() {
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const { galleryId } = useParams();
  const dataUrl = `http://localhost:5000/api/galleries/${galleryId}`;

  useEffect(() => {
    axios
      .get<Gallery>(dataUrl)
      .then((response: AxiosResponse) => setGallery(response.data));

    // 페이지 이동이 취소되는 경우 현재 페이지를 유지합니다.
  }, [dataUrl, gallery]);

  if (gallery === null) {
    return <h1>No data</h1>;
  }

  return (
    <Background>
      <GalleryInfoWrapper>
        <GalleryPoster src={gallery.posterUrl} />
        <GalleryInfo>
          <GalleryTitle>{gallery.title}</GalleryTitle>
          <GalleryPeriod>
            기간: {formatDateString(gallery.openDate)} -{' '}
            {formatDateString(gallery.closeDate)}
          </GalleryPeriod>
          <GalleryDescription>{gallery.description}</GalleryDescription>
          <AuthorProfile>
            <AuthorImg />
            <AuthorInfo>
              <AuthorName>이삭</AuthorName>
              <AuthorEmail>issac@toast.com</AuthorEmail>
            </AuthorInfo>
          </AuthorProfile>
        </GalleryInfo>
      </GalleryInfoWrapper>
      <ButtonWrapper>
        <Link to="/">
          <ButtonOrange value="1관" handleClick={() => {}} />
        </Link>
        <Link to="/">
          <ButtonOrange value="2관" handleClick={() => {}} />
        </Link>
        <Link to="/">
          <ButtonOrange value="3관" handleClick={() => {}} />
        </Link>
      </ButtonWrapper>
      <CommentsWrapper>
        <UserImg />
        <InputField defaultText="방명록을 입력해 주세요." />
        <ButtonOrange value="입력" handleClick={() => {}} />
      </CommentsWrapper>
    </Background>
  );
}

export default GalleryDetailPage;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #f2f3f5 0%,
    #ffffff 48.44%,
    rgba(242, 243, 245, 0.9375) 100%
  );
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const GalleryInfoWrapper = styled.div`
  margin: 96px auto 48px auto;
  display: flex;
`;

const GalleryPoster = styled.img`
  width: 286px;
  height: 390px;
  border-radius: 10px;
`;

const GalleryInfo = styled.div`
  width: 569px;
  margin-left: 96px;
  position: relative;
`;

const GalleryTitle = styled.h1`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  font-size: 36px;
`;

const GalleryPeriod = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #a8a8a8;
`;

const GalleryDescription = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const AuthorProfile = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: flex-end;
`;

const AuthorImg = styled.img`
  display: inline-block;
  bottom: 0;
  height: 96px;
  width: 96px;
  border-radius: 50%;
`;

const AuthorInfo = styled.div`
  margin-left: 24px;
  position: relative;
`;

const AuthorName = styled.h2`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
`;

const AuthorEmail = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-decoration-line: underline;
  color: #777777;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 36px;
`;

const CommentsWrapper = styled.div`
  margin: 48px auto;
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
