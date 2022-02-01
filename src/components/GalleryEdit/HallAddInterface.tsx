import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;

  div + div {
    margin-left: 1em;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 1em;
    padding: 0.3em;
    background: none;
    border-radius: 0.5em;
    cursor: pointer;
  }
`;

interface Props {
  id: number;
  name: string;
}

function HallAddInterface({ id, name }: Props) {
  return (
    <Container key={id}>
      <div>{name}</div>
      <Buttons>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} type="button">
            작품
            <br />
            등록
          </button>
        ))}
      </Buttons>
    </Container>
  );
}

export default HallAddInterface;
