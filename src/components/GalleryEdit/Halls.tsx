import { memo, useCallback, useState } from 'react';

import styled from 'styled-components';

import { HallsProps, Index } from '../../types/GalleryEdit';

import HallField from './HallField';
import Modal from './Modal';

function Halls({
  halls,
  onChangeHallName,
  onChangeHallTheme,
  onClickDeleteHallButton,
  onChangePieceField,
  onChangeNotification,
}: HallsProps) {
  const [modalOn, setModalOn] = useState(false);
  const [indexNumbers, setIndexNumbers] = useState<Index>({
    hallIndex: 0,
    pieceIndex: 0,
  });

  const openModal = useCallback(async ({ hallIndex, pieceIndex }: Index) => {
    await setIndexNumbers({
      hallIndex,
      pieceIndex,
    });
    setModalOn(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOn(false);
  }, []);

  const { hallIndex, pieceIndex } = indexNumbers;

  return (
    <Container>
      {halls.length ? (
        halls.map(({ hallName, hallTheme, imagesData }, index) => {
          return (
            <HallField
              key={`hall-${index}`}
              halls={halls}
              hallIndex={index}
              name={hallName}
              theme={hallTheme}
              pieces={imagesData}
              openModal={openModal}
              onChangeHallName={onChangeHallName}
              onChangeHallTheme={onChangeHallTheme}
              onClickDeleteHallButton={onClickDeleteHallButton}
              onChangeNotification={onChangeNotification}
            />
          );
        })
      ) : (
        <span>전시관을 등록해주세요 :)</span>
      )}
      {modalOn && (
        <Modal
          halls={halls}
          hallIndex={hallIndex}
          pieceIndex={pieceIndex}
          closeModal={closeModal}
          onChange={onChangePieceField}
          onChangeNotification={onChangeNotification}
        />
      )}
    </Container>
  );
}

export default memo(Halls);

const Container = styled.div`
  width: 680px;
  & > span {
    opacity: 0.8;
    color: #f3643f;
  }
  @media only screen and (max-width: 720px) {
    width: 340px;
  }
`;
