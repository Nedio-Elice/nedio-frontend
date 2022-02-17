import { useNavigate } from 'react-router-dom';
import {
  AuthorEmail,
  AuthorImg,
  AuthorInfo,
  AuthorName,
  AuthorProfile,
  EditButtons,
  EmptyDiv,
  GalleryDescription,
  GalleryInfo,
  GalleryInfoWrapper,
  GalleryPeriod,
  GalleryPoster,
  GalleryTitle,
} from '../../styles/galleryDetailPage';
import Buttons from '../../components/Buttons';
import { Gallery } from '../../types/GalleryDetail';
import formatDateString from '../../utils/date';
import { PATH } from '../../constants/path';
import { MyInfo } from '../../store/user';
import { useAppDispatch } from '../../store/hooks';
import { deleteGallery } from '../../store/myGallery';

interface Props {
  gallery: Gallery;
  galleryId: string | undefined;
  user: MyInfo;
}

const { ButtonEdit, ButtonDelete } = Buttons;

function GalleryInformation({ gallery, galleryId, user }: Props) {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const handleEditClick = () => navigation(`${PATH.GALLERY_EDIT}/${galleryId}`);
  const handleDeleteClick = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('해당 갤러리를 삭제하시겠습니까?')) {
      dispatch(deleteGallery(galleryId));
      navigation(PATH.MAIN);
    }
  };

  return (
    <GalleryInfoWrapper>
      <GalleryPoster src={gallery.posterUrl} alt=" " />
      <GalleryInfo>
        {gallery.authorId === user._id ? (
          <EditButtons>
            <ButtonEdit value="수정" handleClick={() => handleEditClick()} />
            <ButtonDelete
              value="삭제"
              handleClick={() => handleDeleteClick()}
            />
          </EditButtons>
        ) : (
          <EmptyDiv height="24px" />
        )}
        <GalleryTitle>{gallery.title}</GalleryTitle>
        <GalleryPeriod>
          기간: {formatDateString(gallery.startDate)} -{' '}
          {formatDateString(gallery.endDate)}
        </GalleryPeriod>
        <GalleryDescription>{gallery.description}</GalleryDescription>
        <AuthorProfile>
          <AuthorImg src={gallery.author.profileURL} alt=" " />
          <AuthorInfo>
            <AuthorName>{gallery.author.nickname}</AuthorName>
            <AuthorEmail>{gallery.author.email}</AuthorEmail>
          </AuthorInfo>
        </AuthorProfile>
      </GalleryInfo>
    </GalleryInfoWrapper>
  );
}

export default GalleryInformation;
