import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;

  div + div {
    margin-left: 1em;
  }

  input {
    margin-right: 1em;
    width: 5em;
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

interface HallProps {
  id: number;
  name: string;
}

interface Props {
  id: number;
  name: string;
  onChangeHallName: (parameter: HallProps) => void;
}

function HallAddInterface({ id, name, onChangeHallName }: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChangeHallName({ id, name: value });
  };

  return (
    <Container key={id}>
      <input
        type="text"
        value={name}
        placeholder="관명"
        onChange={handleChange}
      />
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
