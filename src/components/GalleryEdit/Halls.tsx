import styled from 'styled-components';
import { HallInfo, ImageInfo } from '../../types/GalleryEdit';

import HallAddForm from './HallAddForm';

interface Props {
  halls: HallInfo[];
  onChangeHallName: (index: number, value: string) => void;
  onClickDeleteHallButton: (index: number) => void;
  onChangePieceField: (
    hallIndex: number,
    pieceIndex: number,
    piece: ImageInfo,
  ) => void;
  onChangePosterUrl: (formData: FormData) => void;
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
        ? halls.map(({ hallName, imagesData }, index) => {
            return (
              <HallAddForm
                key={`hall-${index}`}
                hallIndex={index}
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

const Container = styled.div`
  width: 680px;
  @media only screen and (max-width: 720px) {
    width: 340px;
  }
`;
