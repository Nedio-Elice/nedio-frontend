import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import {
  addHall,
  updatePiece,
  changeGalleryInput,
  changeHallName,
  deleteHall,
  changePosterUrl,
  updateGallery,
  refreshNotification,
  claerAllState,
} from '../../store/gallery';

import GalleryEdit from '../../components/GalleryEdit';
import {
  ChangeValueWithIndex,
  ChangeValueWithName,
  OnChangePieceFieldArgs,
} from '../../types/GalleryEdit';

function GalleryEditContainer() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    galleryInfo: gallery,
    halls,
    notification,
  } = useAppSelector((state: RootState) => state.gallery);

  const handleClickAddHallButton = () => {
    dispatch(addHall());
  };

  const handleChangeHallName = ({ index, value }: ChangeValueWithIndex) => {
    dispatch(changeHallName({ index, value }));
  };

  const handleClickDeleteHallButton = (index: number) => {
    dispatch(deleteHall(index));
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
    dispatch(updateGallery(navigate));
  };

  const handleChangeNotification = (text: string) => {
    dispatch(refreshNotification(text));
  };

  useEffect(() => {
    return () => {
      dispatch(claerAllState());
    };
  }, [dispatch]);

  return (
    <div>
      <GalleryEdit
        gallery={gallery}
        halls={halls}
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
