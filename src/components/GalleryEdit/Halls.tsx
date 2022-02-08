import styled from 'styled-components';

import { HallsProps } from '../../types/GalleryEdit';

import HallAddForm from './HallAddForm';

function Halls({
  halls,
  onChangeHallName,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangePosterUrl,
  onChangeNotification,
}: HallsProps) {
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
