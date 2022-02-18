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
`;

export const GalleryInfoWrapper = styled.div`
  margin: 48px auto;
  padding: 56px 48px;
  box-shadow: 10px 10px 20px #e1e2e4, -10px -10px 20px #ffffff;
  border-radius: 20px;
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #fdfdfd,
    #fafafb,
    #f8f8f9,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f8f8f9,
    #fafafb,
    #fdfdfd,
    #ffffff
  );

  @media (max-width: 1100px) {
    padding: 72px 24px;
    margin: 48px 48px;
    width: 90%;
  }

  @media (max-width: 930px) {
    display: block;
  }
`;

export const GalleryPoster = styled.img`
  width: 286px;
  height: 390px;
  border-radius: 10px;
  box-shadow: -8px -8px 16px rgb(255 255 255 / 25%), 4px 8px 16px #bbbbbb;
  @media (max-width: 930px) {
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

  @media (max-width: 930px) {
    width: 100%;
    margin: 0px;
  }
`;

export const GalleryTitle = styled.h1`
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  font-size: 36px;
  background: linear-gradient(to bottom, #5a5e64 0%, #1f1f1f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GalleryPeriod = styled.p`
  margin-top: 16px;
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: transparent;
  background: linear-gradient(to bottom, #8a8e96 0%, #636363 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

export const GalleryDescription = styled.p`
  margin: 24px 0;
  min-height: 115px;
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  white-space: pre-wrap;
  color: transparent;
  background: #777777;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
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
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  margin-bottom: 8px;
  color: transparent;
  background: #aaaaaa;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

export const AuthorEmail = styled.p`
  font-family: 'Pretendard-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: transparent;
  background: #aaaaaa;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

export const EditButtons = styled.div`
  display: flex;
  align-items: end;
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

export const GalleryWrapper = styled.div`
  margin: 48px auto;
  padding: 72px 48px;
  box-shadow: 10px 10px 20px #e1e2e4, -10px -10px 20px #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;

  background-image: linear-gradient(
    to right bottom,
    #ffffff,
    #fdfdfd,
    #fafafb,
    #f8f8f9,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f5f6f7,
    #f8f8f9,
    #fafafb,
    #fdfdfd,
    #ffffff
  );

  @media (max-width: 1100px) {
    padding: 72px 24px;
    margin: 48px 48px;
  }
`;

export const CommentTitle = styled.p`
  margin: 48px auto 12px auto;
  padding: 0px 36px;
  display: flex;
  justify-content: start;
  width: 848px;
  font-family: 'Pretendard-Regular';
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 2px;
 color: transparent;
background: #CCCCCC;
-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
  

  @media (max-width: 1100px){
    width: 90%;
  }
  @media (max-width: 850px) {
    width: 100%;
`;

export const NoCommentTag = styled.div`
  margin: 24px auto;
  font-family: 'Pretendard-Regular';
  font-size: 20px;
  color: transparent;
  background: #bbbbbb;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;
