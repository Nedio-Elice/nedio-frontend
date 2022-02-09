import styled from 'styled-components';

export const ProfileBox = styled.div`
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  );
`;

export const ProfileForm = styled.div`
  margin: 0 auto;
  padding: 72px;
  width: 1072px;
`;

export const UserImg = styled.img`
  display: inline-block;
  height: 192px;
  width: 192px;
  border-radius: 50%;
  box-shadow: -8px -8px 16px rgb(255 255 255 / 25%), 4px 12px 16px #bbbbbb;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const InfoSubWrapper = styled.div`
  width: 50%;
  padding: 72px 48px 0 0;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapperRight = styled.div`
  display: flex;
  margin: 24px 48px 0 auto;
`;

export const ButtonWrapperLeft = styled.div`
  display: flex;
  margin-bottom: 48px;
  gap: 48px;
`;

export const MyGalleryBox = styled.div`
  width: 100%;
  min-height: 50vh;
  background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  );
`;

export const GalleryWrapper = styled.div`
  margin: 0 auto;
  padding: 0 0 72px 0;
  width: 1072px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  gap: 50px 24px;
  margin-bottom: 48px;
`;
