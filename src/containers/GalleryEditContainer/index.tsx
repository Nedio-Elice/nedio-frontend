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
} from '../../store/gallery';

import { ImagesData } from '../../types/GalleryEdit';

import GalleryEdit from '../../components/GalleryEdit';

function GalleryEditContainer() {
  const dispatch = useAppDispatch();

  const gallery = useAppSelector((state: RootState) => state.gallery);

  const handleClickAddHallButton = () => {
    dispatch(addHall());
  };

  const handleChangeHallName = (id: string, value: string) => {
    dispatch(changeHallName({ id, value }));
  };

  const handleClickDeleteHallButton = (id: string) => {
    dispatch(deleteHall(id));
  };

  const handleChangePieceField = (piece: ImagesData) => {
    dispatch(updatePiece(piece));
  };

  const handleChangeGalleryInputField = (value: string, name: string) => {
    dispatch(changeGalleryInput({ name, value }));
  };

  const handleChangePosterUrl = (formData: FormData, piece?: ImagesData) => {
    if (piece) {
      dispatch(changePosterUrl(formData, piece));
      return;
    }
    dispatch(changePosterUrl(formData));
  };

  const handleClickUpdateGallery = () => {
    dispatch(updateGallery());
  };

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        onClickDeleteHallButton={handleClickDeleteHallButton}
        onChangeHallName={handleChangeHallName}
        onChangePieceField={handleChangePieceField}
        onChangeGalleryInputField={handleChangeGalleryInputField}
        onChangePosterUrl={handleChangePosterUrl}
        onClickUpdateGallery={handleClickUpdateGallery}
        gallery={gallery}
      />
    </div>
  );
}

export default GalleryEditContainer;
