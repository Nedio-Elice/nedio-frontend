import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 100%;
  }
`;

function TitleField() {
  return (
    <Container>
      <label htmlFor="title">제목</label>
      <input type="text" id="title" />
    </Container>
  );
}

export default TitleField;
