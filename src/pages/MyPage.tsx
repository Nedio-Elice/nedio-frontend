import styled from 'styled-components';
import NavBar from '../components/NavBar';

function MyPage() {
  return (
    <>
      <NavBar />
      <ProfileBox />
      <MyGalleryBox />
    </>
  );
}

export default MyPage;

const ProfileBox = styled.div`
  width: 100%;
  height: 591px;
  background: linear-gradient(180deg, #f2f3f5 0%, #ffffff 48.44%, #f2f3f5 100%);
`;

const MyGalleryBox = styled.div`
  width: 100%;
  height: 591px;
  background: linear-gradient(180deg, #f2f3f5 0%, #ffffff 48.44%, #f2f3f5 100%);
`;
