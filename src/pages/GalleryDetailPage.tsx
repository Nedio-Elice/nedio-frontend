import Buttons from '../components/Buttons';
import InputField from '../components/InputField';

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
    </div>
  );
}

export default GalleryDetailPage;
