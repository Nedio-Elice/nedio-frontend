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
  width: 80vw;
  @media (max-width: 1024px) {
    display: block;
    align-items: center;
    padding: 72px 15vw 72px 15vw;
  }
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
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const InfoSubWrapper = styled.div`
  width: 50%;
  padding: 72px 48px 0 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: block;
    padding: 0px;
    width: 100%;
  }
`;

export const ButtonWrapperRight = styled.div`
  margin: 24px 48px 0 auto;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 0px;
  }
`;

export const ButtonWrapperTab = styled.div`
  display: flex;
  margin: 0 24px 48px 24px;
  gap: 48px;
  @media (max-width: 1100px) {
    justify-content: center;
  }
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
  max-width: 1072px;

  @media (max-width: 1100px) {
    padding: 0 36px 72px 36px;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: left;

  gap: 50px 24px;
  margin-bottom: 48px;
  grid-template-columns: repeat(4, minmax(250px, 1fr));

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-content: center;
    gap: 50px 12px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
