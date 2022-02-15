import styled, { css } from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  );
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

export const GalleryInfoWrapper = styled.div`
  margin: 48px auto 48px auto;
  padding: 72px 48px;
  box-shadow: 10px 10px 20px #e1e2e4, -10px -10px 20px #ffffff;
  border-radius: 20px;
  display: flex;

  @media (max-width: 1100px) {
    padding: 72px 24px;
  }

  @media (max-width: 800px) {
    display: block;
    padding: 72px auto;
  }
`;

export const GalleryPoster = styled.img`
  width: 286px;
  height: 390px;
  border-radius: 10px;
  box-shadow: -8px -8px 16px rgb(255 255 255 / 25%), 4px 8px 16px #bbbbbb;
  @media (max-width: 800px) {
    display: block;
    margin: 0px auto 24px auto;
  }
`;

export const GalleryInfo = styled.div`
  width: 569px;
  margin-left: 48px;
  position: relative;

  @media (max-width: 1100px) {
    width: 50vw;
  }

  @media (max-width: 800px) {
    width: 100%;
    margin: 0px;
  }
`;

export const GalleryTitle = styled.h1`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 48px;
  font-size: 36px;
`;

export const GalleryPeriod = styled.p`
  margin-top: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #a8a8a8;
`;

export const GalleryDescription = styled.p`
  margin: 48px 0;
  min-height: 115px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  white-space: pre-wrap;
`;

export const AuthorProfile = styled.div`
  width: fit-content;
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const AuthorImg = styled.img`
  display: inline-block;
  bottom: 0;
  height: 96px;
  width: 96px;
  border-radius: 50%;
  @media (max-width: 800px) {
    display: block;
    margin-left: auto;
    margin-bottom: 1rem;
  }
`;

export const AuthorInfo = styled.div`
  margin-left: 18px;
  position: relative;
`;

export const AuthorName = styled.h2`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  margin-bottom: 8px;
`;

export const AuthorEmail = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  text-decoration-line: underline;
  color: #777777;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin: 12px auto;
  display: flex;
  gap: 36px;
`;

export const EmptyDiv = styled.div<{ height: string }>`
  ${(props) =>
    css`
      height: ${props.height};
    `}
`;
