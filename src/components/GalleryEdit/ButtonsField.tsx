import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  button {
    background: none;
    border-radius: 0.3em;
    cursor: pointer;
  }

  button + button {
    margin-left: 1em;
  }
`;

function ButtonsField() {
  return (
    <Container>
      <button type="button">전시관 추가</button>
      <button type="button">미리보기</button>
      <button type="button">갤러리 생성</button>
    </Container>
  );
}

export default ButtonsField;
