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
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  column-gap: 1.5rem;
  row-gap: 3rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
