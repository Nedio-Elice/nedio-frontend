import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import {
  addHall,
  updatePiece,
  changeGalleryInput,
  changeHallName,
  changePosterUrl,
  updateGallery,
  refreshNotification,
  claerAllState,
  loadGallery,
  setMode,
  fetchDeleteHall,
} from '../../store/gallery';

import GalleryEdit from '../../components/GalleryEdit';
import {
  ChangeValueWithIndex,
  ChangeValueWithName,
  OnChangePieceFieldArgs,
} from '../../types/GalleryEdit';

function GalleryEditContainer() {
  const navigate = useNavigate();

  const { galleryId } = useParams();

  const dispatch = useAppDispatch();

  const {
    galleryInfo: gallery,
    halls,
    notification,
    mode,
  } = useAppSelector((state: RootState) => state.gallery);

  const handleClickAddHallButton = () => {
    dispatch(addHall());
  };

  const handleChangeHallName = ({ index, value }: ChangeValueWithIndex) => {
    dispatch(changeHallName({ index, value }));
  };

  const handleClickDeleteHallButton = (index: number) => {
    dispatch(fetchDeleteHall(index));
  };

  const handleChangePieceField = ({
    hallIndex,
    pieceIndex,
    piece,
  }: OnChangePieceFieldArgs) => {
    dispatch(updatePiece({ hallIndex, pieceIndex, piece }));
  };

  const handleChangeGalleryInputField = ({
    value,
    name,
  }: ChangeValueWithName) => {
    dispatch(changeGalleryInput({ name, value }));
  };

  const handleChangePosterUrl = (formData: FormData) => {
    dispatch(changePosterUrl(formData));
  };

  const handleClickUpdateGallery = () => {
    if (galleryId) {
      dispatch(updateGallery({ navigate, galleryId }));
      return;
    }
    dispatch(updateGallery({ navigate }));
  };

  const handleChangeNotification = (text: string) => {
    dispatch(refreshNotification(text));
  };

  useEffect(() => {
    if (galleryId) {
      dispatch(setMode('modify'));
      dispatch(loadGallery(galleryId));
    }

    return () => {
      dispatch(claerAllState());
    };
  }, [dispatch, galleryId]);

  return (
    <div>
      <GalleryEdit
        gallery={gallery}
        halls={halls}
        mode={mode}
        notification={notification}
        onClickAddHallButton={handleClickAddHallButton}
        onClickDeleteHallButton={handleClickDeleteHallButton}
        onChangeHallName={handleChangeHallName}
        onChangePieceField={handleChangePieceField}
        onChangeGalleryInputField={handleChangeGalleryInputField}
        onChangePosterUrl={handleChangePosterUrl}
        onClickUpdateGallery={handleClickUpdateGallery}
        onChangeNotification={handleChangeNotification}
      />
    </div>
  );
}

export default GalleryEditContainer;
