import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    cursor: pointer;
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }
`;

function DateField() {
  return (
    <Container>
      <label htmlFor="date">기간</label>
      <input type="date" id="date" />
      -
      <input type="date" id="date" />
    </Container>
  );
}

export default DateField;
