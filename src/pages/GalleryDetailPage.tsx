import Buttons from '../components/Buttons';
import InputField from '../components/InputField';
import Comment from '../components/Comment';

const { ButtonBasic, ButtonOrange, ButtonNeumo } = Buttons;

function GalleryDetailPage() {
  return (
    <div>
      <ButtonBasic value="정보수정" handleClick={() => {}} />
      <br />
      <ButtonOrange value="정보수정" handleClick={() => {}} />
      <br />
      <ButtonNeumo value="운영중인 전시" handleClick={() => {}} />
      <br />
      <InputField defaultText="방명록을 입력해 주세요." value="" />
      <br />
      <br />
      <Comment
        username="Elfo"
        profileImgURL="https://icon2.cleanpng.com/20180509/ywe/kisspng-user-profile-computer-icons-5af3635866ded6.8368297615259001204214.jpg"
        content="전시 잘 봤습니다! 정말 색다른 사진들이 많은거 같아요."
        handleClickUpdate={() => {}}
        handleClickDelete={() => {}}
      />
      <Comment
        username="Elfo"
        profileImgURL="https://icon2.cleanpng.com/20180509/ywe/kisspng-user-profile-computer-icons-5af3635866ded6.8368297615259001204214.jpg"
        content="전시 잘 봤습니다! 정말 색다른 사진들이 많은거 같아요."
        handleClickUpdate={() => {}}
        handleClickDelete={() => {}}
      />
    </div>
  );
}

export default GalleryDetailPage;
