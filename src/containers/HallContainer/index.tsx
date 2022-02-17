/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useLayoutEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../../api/api';
import Modal from '../../components/Modal';
import ErrorBoundary from '../../components/ErrorBoundary';
import Hall from '../../components/Three/Hall';
import Landing from '../../components/Three/Landing';
import MouseIcon from '../../components/Three/MouseIcon';
import { useAppSelector } from '../../store/hooks';

function HallContainer() {
  const [hall, setHall] = useState<any>();
  const [selectedItem, setSelectedItem] = useState<any>();
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);
  const control = useAppSelector((state) => state.controls.movement);
  const { hallId } = useParams();

  const handlePictureClick = (item: any) => {
    if (!control.isLocked) return;
    modalRef.current?.show();
    setSelectedItem(item);
    control?.unlock && control?.unlock();
  };

  useLayoutEffect(() => {
    (async () => {
      await axiosInstance
        .get(`halls/${hallId}`)
        .then((res) => setHall(res.data.data));
    })();
  }, [hallId]);

  return (
    <ErrorBoundary>
      <Container>
        <Landing />
        <MouseIcon />
        {hall && <Hall pickItem={handlePictureClick} hall={hall} />}

        <Modal ref={modalRef} width={400} height={480} isHall>
          {selectedItem && (
            <>
              <TempImg src={selectedItem.imageUrl} />
              <div>{selectedItem.imageDescription}</div>
            </>
          )}
        </Modal>
      </Container>
    </ErrorBoundary>
  );
}

export default HallContainer;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const TempImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
