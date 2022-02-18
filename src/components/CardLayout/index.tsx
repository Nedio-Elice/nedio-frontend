import styled from 'styled-components';
import { DEVICE } from '../../constants/device';

interface Props {
  title: string;
  children: React.ReactNode;
}

function CardLayout({ title, children }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
}

export default CardLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
  max-width: 1280px;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 25px;
  margin-bottom: 2.5rem;

  @media ${DEVICE.DESKTOP_LARGE} {
    font-size: 23px;
    margin-bottom: 2rem;
  }

  @media ${DEVICE.TABLET} {
    font-size: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  column-gap: 2rem;
  row-gap: 3rem;
  justify-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);

  @media ${DEVICE.DESKTOP_LARGE} {
    justify-content: space-around;
    column-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${DEVICE.DESKTOP} {
    justify-content: space-around;
    column-gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${DEVICE.TABLET} {
    justify-content: space-around;
    column-gap: 1.5rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
