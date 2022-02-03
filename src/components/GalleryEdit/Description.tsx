import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: start;
  textarea {
    height: 100%;
    width: 100%;
    overflow: auto;
  }
`;

function Description() {
  return (
    <Container>
      <label htmlFor="description">설명</label>
      <textarea wrap="virtual" id="description" />
    </Container>
  );
}

export default Description;
