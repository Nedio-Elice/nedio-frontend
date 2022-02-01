import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  select {
    cursor: pointer;
  }
`;

function CategoriesField() {
  return (
    <Container>
      <label htmlFor="category">분류</label>
      <select id="category">
        <option value="">Select</option>
        <option value="자연">자연</option>
        <option value="인물">인물</option>
        <option value="동물">동물</option>
      </select>
    </Container>
  );
}

export default CategoriesField;
