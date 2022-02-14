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

      <Modal ref={modalRef} width={700} height={480} isHall>
        {selectedItem && (
          <ModalContainer>
            <Content>
              <Title>작품 소개</Title>
              <Description>{selectedItem.imageDescription}</Description>
            </Content>
            <ImgWrapper>
              <TempImg src={selectedItem.imageUrl} />
            </ImgWrapper>
          </ModalContainer>
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

const ModalContainer = styled.div`
  padding: 65px 8%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: black;
`;

const Content = styled.div`
  font-size: 1rem;
  flex: 1;
  height: 350px;
  min-width: 200px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
`;

const ImgWrapper = styled.div`
  width: 350px;
  height: 350px;
`;

const TempImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
