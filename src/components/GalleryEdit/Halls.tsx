import styled from 'styled-components';

import HallAddForm from './HallAddForm';

import { Hall, Piece } from '../../types/GalleryEdit';

const Container = styled.div`
  width: 100%;
`;

interface Props {
  halls: Hall[];
  onChangeHallName: (id: string, value: string) => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangePieceField: (piece: Piece) => void;
  onChangePosterUrl: (formData: any, piece?: Piece) => void;
}

function Halls({
  halls,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangePosterUrl,
}: Props) {
  return (
    <Container>
      {halls
        ? halls.map(({ id, name, pieces }) => {
            return (
              <HallAddForm
                key={id}
                id={id}
                name={name}
                pieces={pieces}
                onChangeHallName={onChangeHallName}
                onClickDeleteHallButton={onClickDeleteHallButton}
                onChangePieceField={onChangePieceField}
                onChangePosterUrl={onChangePosterUrl}
              />
            );
          })
        : '전시관을 등록해주세요 :)'}
    </Container>
  );
}

export default Halls;
