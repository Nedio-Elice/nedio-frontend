import { useCallback, useEffect } from 'react';

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

  const handleClickAddHallButton = useCallback(() => {
    dispatch(addHall());
  }, [dispatch]);

  const handleChangeHallName = useCallback(
    ({ index, value }: ChangeValueWithIndex) => {
      dispatch(changeHallName({ index, value }));
    },
    [dispatch],
  );

  const handleClickDeleteHallButton = useCallback(
    (index: number) => {
      dispatch(fetchDeleteHall(index));
    },
    [dispatch],
  );

  const handleChangePieceField = useCallback(
    ({ hallIndex, pieceIndex, piece }: OnChangePieceFieldArgs) => {
      dispatch(updatePiece({ hallIndex, pieceIndex, piece }));
    },
    [dispatch],
  );

  const handleChangeGalleryInputField = useCallback(
    ({ value, name }: ChangeValueWithName) => {
      dispatch(changeGalleryInput({ name, value }));
    },
    [dispatch],
  );

  const handleChangePosterUrl = useCallback(
    (formData: FormData) => {
      dispatch(changePosterUrl(formData));
    },
    [dispatch],
  );

  const handleClickUpdateGallery = useCallback(() => {
    if (galleryId) {
      dispatch(updateGallery({ navigate, galleryId }));
      return;
    }
    dispatch(updateGallery({ navigate }));
  }, [dispatch, navigate, galleryId]);

  const handleChangeNotification = useCallback(
    (text: string) => {
      dispatch(refreshNotification(text));
    },
    [dispatch],
  );

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
