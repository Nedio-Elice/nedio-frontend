import { Link } from 'react-router-dom';
import { User } from '../../store/profile';
import {
  AuthorEmail,
  AuthorImg,
  AuthorInfo,
  AuthorName,
  AuthorProfile,
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
import formatDateString from '../../utils/datestring';
import { padding } from '../../utils/date';

interface Props {
  gallery: Gallery;
  galleryId: string | undefined;
  author: User;
  user: User;
}

const { ButtonEdit } = Buttons;

function GalleryInformation({ gallery, galleryId, user, author }: Props) {
  return (
    <GalleryInfoWrapper>
      <GalleryPoster src={gallery.posterUrl} alt=" " />
      <GalleryInfo>
        {gallery.authorId === user._id ? (
          <Link
            to={`gallery/edit/${galleryId}`}
            style={{ textDecoration: 'none' }}
          >
            <ButtonEdit value="수정" />
          </Link>
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
          <AuthorImg src={author.profileURL} alt=" " />
          <AuthorInfo>
            <AuthorName>{author.nickname}</AuthorName>
            <AuthorEmail>{author.email}</AuthorEmail>
          </AuthorInfo>
        </AuthorProfile>
      </GalleryInfo>
    </GalleryInfoWrapper>
  );
}

export default GalleryInformation;
