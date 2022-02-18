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
  padding: 72px 36px;
  width: 50vw;
  min-width: 840px;
  @media (max-width: 1100px) {
    width: 80vw;
    min-width: 0px;
    display: block;
    align-items: center;
    padding: 72px 20vw;
  }
  @media (max-width: 1000px) {
    padding: 72px 15vw 72px 15vw;
  }
  @media (max-width: 600px) {
    padding: 48px 48px;
  }
`;

export const UserImg = styled.img`
  display: block;
  height: 320px;
  width: 240px;
  margin: 80px auto;
  border-radius: 10px;
  box-shadow: -8px -8px 16px rgb(255 255 255 / 25%), 4px 12px 16px #bbbbbb;

  @media (max-width: 1100px) {
    margin: 0 auto 24px auto;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

export const InfoSubWrapper = styled.div`
  width: 50%;
  padding: 24px 48px;
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
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: -4px -4px 16px rgba(255, 255, 255, 0.25),
    4px 4px 16px rgba(218, 218, 218, 0.75);
  @media (max-width: 1200px) {
    display: block;
    padding: 64px 48px 48px 48px;
    width: 100%;
    min-width: 360px;
  }
`;

export const ButtonWrapperRight = styled.div`
  margin: 0 0 0 auto;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ButtonWrapperTab = styled.div`
  display: flex;
  margin: 0 24px 48px 24px;
  gap: 48px;
  @media (max-width: 800px) {
    gap: 5vw;
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

  @media (max-width: 1200px) {
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-content: center;
    gap: 50px 36px;
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px 12px;
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
