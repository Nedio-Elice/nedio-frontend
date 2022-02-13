import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import Hall from '../components/Three/Hall';
import Landing from '../components/Three/Landing';
import { useAppSelector } from '../store/hooks';
import { gradientBlue } from '../styles/mixins';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

function HallPage() {
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);

  const [modal, setModal] = useState<Props>({
    title: '',
    description: '',
    imageUrl: '',
  });

  const openModal = ({ title, description, imageUrl }: Props) => {
    setModal({
      title,
      description,
      imageUrl,
    });

    modalRef.current?.show();
  };

  return (
    <Container>
      {/* <Landing /> */}
      <Hall openModal={openModal} />
      <Modal ref={modalRef} width={500} height={740}>
        <Wrapper>
          <Title>{modal.title}</Title>
          <Image src={modal.imageUrl} alt="alt" />
          <Description>{modal.description}</Description>
        </Wrapper>
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

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  ${gradientBlue}
  color: white;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 530px;
  z-index: 100;
`;

const Description = styled.p`
  width: 100%;
  padding: 1em;
`;
