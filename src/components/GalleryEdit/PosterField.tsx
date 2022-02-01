import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 1em;
  width: 15em;
  height: 20em;
  margin-right: 2em;
  cursor: pointer;
  input {
    display: none;
  }
`;

function PosterField() {
  return (
    <Container>
      <label htmlFor="posterUpload">포스터 업로드</label>
      <input type="file" id="posterUpload" />
    </Container>
  );
}

export default PosterField;
