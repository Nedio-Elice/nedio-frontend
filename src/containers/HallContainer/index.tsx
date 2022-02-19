/* eslint-disable @typescript-eslint/no-explicit-any */
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

        <Modal
          ref={modalRef}
          width={
            selectedItem?.width &&
            selectedItem.height &&
            parseInt(selectedItem.width, 10) > parseInt(selectedItem.height, 10)
              ? 960
              : 830
          }
          height={460}
          isHall
        >
          {selectedItem && (
            <ModalWrapper>
              <TextField>
                <Title>{selectedItem.imageTitle}</Title>
                <Description>{selectedItem.imageDescription}</Description>
              </TextField>
              <Img
                src={selectedItem.imageUrl}
                horizontal={
                  selectedItem.width &&
                  selectedItem.height &&
                  parseInt(selectedItem.width, 10) >
                    parseInt(selectedItem.height, 10)
                }
              />
            </ModalWrapper>
          )}
        </Modal>
      </Container>
    </ErrorBoundary>
  );
}

export default HallContainer;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ModalWrapper = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const Img = styled.img<{ horizontal: boolean }>`
  width: ${(props) => (props.horizontal ? '60%' : '40%')};
  height: 100%;
  margin-left: auto;
`;

const TextField = styled.div`
  width: fit-content;
  border-radius: none;
  margin-top: 4em;
  padding: 2em;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 300;
  margin-bottom: 2em;
`;

const Description = styled.p`
  height: 280px;
  text-align: left;
  line-height: 1.2em;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
