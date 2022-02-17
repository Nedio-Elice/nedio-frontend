import styled from 'styled-components';

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
  font-size: 30px;
  line-height: 25px;
  margin-bottom: 2.5rem;
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

  /* @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;
