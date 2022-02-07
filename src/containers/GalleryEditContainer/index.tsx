import { useEffect } from 'react';

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

import { ImageInfo } from '../../types/GalleryEdit';

import GalleryEdit from '../../components/GalleryEdit';

function GalleryEditContainer() {
  const dispatch = useAppDispatch();

  const {
    galleryInfo: gallery,
    halls,
    notification,
  } = useAppSelector((state: RootState) => state.gallery);

  const handleClickAddHallButton = () => {
    dispatch(addHall());
  };

  const handleChangeHallName = (index: number, value: string) => {
    dispatch(changeHallName({ index, value }));
  };

  const handleClickDeleteHallButton = (index: number) => {
    dispatch(deleteHall(index));
  };

  const handleChangePieceField = (
    hallIndex: number,
    pieceIndex: number,
    piece: ImageInfo,
  ) => {
    dispatch(updatePiece({ hallIndex, pieceIndex, piece }));
  };

  const handleChangeGalleryInputField = (value: string, name: string) => {
    dispatch(changeGalleryInput({ name, value }));
  };

  const handleChangePosterUrl = (formData: FormData) => {
    dispatch(changePosterUrl(formData));
  };

  const handleClickUpdateGallery = () => {
    dispatch(updateGallery());
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
