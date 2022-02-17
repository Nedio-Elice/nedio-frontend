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
    font-size: 25px;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  column-gap: 1.5rem;
  row-gap: 3rem;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
