import { MyGalleryBox, ProfileBox, ProfileForm } from '../styles/myPage';
import MyInformation from '../containers/MyInfoContainer';
import MyGallery from '../containers/MyGalleryContainer';

function MyPage() {
  return (
    <>
      <ProfileBox>
        <ProfileForm>
          <MyInformation />
        </ProfileForm>
      </ProfileBox>
      <MyGalleryBox>
        <MyGallery />
      </MyGalleryBox>
    </>
  );
}

export default MyPage;
