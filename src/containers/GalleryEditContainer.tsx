import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import GalleryEdit from '../components/GalleryEdit';

import {
  addHall,
  updatePiece,
  changeGalleryInput,
  changeHallName,
  deleteHall,
} from '../store/gallery';

import { RootState } from '../store/root';
import { Piece } from '../types/GalleryEdit';

// 임시
const State = styled.div`
  position: absolute;
  top: 30%;
  right: 30%;
  display: flex;
  flex-direction: column;
  ul {
    margin-left: 10%;
  }
`;

function GalleryEditContainer() {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const gallery = useSelector((state: RootState) => state.gallery);

  const { halls, title, category, startDate, endDate, description } = gallery;

  const handleClickAddHallButton = () => {
    dispatch(addHall());
  };

  const handleChangeHallName = (id: string, value: string) => {
    dispatch(changeHallName({ id, value }));
  };

  const handleClickDeleteHallButton = (id: string) => {
    dispatch(deleteHall(id));
  };

  const handleChangePieceField = (piece: Piece) => {
    dispatch(updatePiece(piece));
  };

  const handleChangeGalleryInputField = (value: string, name: string) => {
    dispatch(changeGalleryInput({ name, value }));
  };

  return (
    <div>
      <GalleryEdit
        onClickAddHallButton={handleClickAddHallButton}
        onClickDeleteHallButton={handleClickDeleteHallButton}
        onChangeHallName={handleChangeHallName}
        onChangePieceField={handleChangePieceField}
        onChangeGalleryInputField={handleChangeGalleryInputField}
        gallery={gallery}
      />
      <State>
        <span>{title}</span>
        <span>{category}</span>
        <span>{`${startDate}-${endDate}`}</span>
        <span>{description}</span>
        <div>
          {halls &&
            halls.map((hall) => {
              return (
                <div key={hall.id}>
                  <span>{hall.name}</span>
                  {hall.pieces &&
                    hall.pieces.map((piece, idx) => {
                      return (
                        <ul key={piece.title + idx}>
                          <li>{idx + 1}번 작품</li>
                          <li>{piece.title}</li>
                          <li>{piece.description}</li>
                        </ul>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </State>
    </div>
  );
}

export default GalleryEditContainer;
