import styled from 'styled-components';
import { ProfileForm } from '../styles/myPage';
import MyInformation from '../containers/MyInfoContainer';
import MyGallery from '../containers/MyGalleryContainer';
import { Background } from '../styles/galleryDetailPage';

function MyPage() {
  return (
    <Background>
      <MyInfo>
        <ProfileForm>
          <MyInformation />
        </ProfileForm>
        <MyGallery />
      </MyInfo>
    </Background>
  );
}

export default MyPage;

export const MyInfo = styled.div`
  margin: 48px auto;
  padding: 24px 48px;
  box-shadow: 10px 10px 20px #e1e2e4, -10px -10px 20px #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 1200px) {
    padding: 72px 24px;
    margin: 48px 48px;
    width: 90%;
  }

  @media (max-width: 1030px) {
    display: block;
  }

  @media (max-width: 660px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;
