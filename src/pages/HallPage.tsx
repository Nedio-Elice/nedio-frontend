import styled from 'styled-components';
import Hall from '../components/Three/Hall';
import Landing from '../components/Three/Landing';

function HallPage() {
  return (
    <Container>
      {/* <Landing /> */}
      <Hall />
    </Container>
  );
}

export default HallPage;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
