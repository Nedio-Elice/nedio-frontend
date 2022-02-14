/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Hall from '../components/Three/Hall';
import Landing from '../components/Three/Landing';
import MouseIcon from '../components/Three/WhiteTheme/MouseIcon';
import { useAppSelector } from '../store/hooks';

function HallPage() {
  const [selectedItem, setSelectedItem] = useState<any>();
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);
  const control = useAppSelector((state) => state.controls.movement);

  const handlePictureClick = (item: any) => {
    // 자유롭게 마우스를 움직일 수 있을 때는 클릭방지
    if (!control.isLocked) return;
    modalRef.current?.show();
    setSelectedItem(item);
    control?.unlock && control?.unlock();
  };

  return (
    <Container>
      <Landing />
      <MouseIcon />
      <Hall pickItem={handlePictureClick} />

      <Modal ref={modalRef} width={400} height={480} isHall>
        {selectedItem && (
          <>
            <TempImg src={selectedItem.imageUrl} />
            <div>{selectedItem.imageDescription}</div>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default HallPage;

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
