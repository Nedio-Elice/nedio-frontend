import styled from 'styled-components';

import HallAddForm from './HallAddForm';

import { Hall, ImagesData } from '../../types/GalleryEdit';

const Container = styled.div`
  width: 680px;
  @media only screen and (max-width: 720px) {
    width: 340px;
  }
`;

interface Props {
  halls: Hall[];
  onChangeHallName: (id: string, value: string) => void;
  onClickDeleteHallButton: (id: string) => void;
  onChangePieceField: (piece: ImagesData) => void;
  onChangePosterUrl: (formData: FormData, piece?: ImagesData) => void;
  onChangeNotification: (text: string) => void;
}

function Halls({
  halls,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangePosterUrl,
  onChangeNotification,
}: Props) {
  return (
    <Container>
      {halls
        ? halls.map(({ id, hallName, imagesData }) => {
            return (
              <HallAddForm
                key={id}
                id={id}
                name={hallName}
                pieces={imagesData}
                onChangeHallName={onChangeHallName}
                onClickDeleteHallButton={onClickDeleteHallButton}
                onChangePieceField={onChangePieceField}
                onChangePosterUrl={onChangePosterUrl}
                onChangeNotification={onChangeNotification}
              />
            );
          })
        : '전시관을 등록해주세요 :)'}
    </Container>
  );
}

export default Halls;
