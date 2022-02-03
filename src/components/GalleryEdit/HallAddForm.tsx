import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
  width: 100%;
  input {
    border: none;
    border-bottom: 1px solid black;
    margin-right: 1em;
    width: 5em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1em;

  button {
    background: none;
    border: none;
    background-color: tomato;
    color: white;
    border-radius: 0.5em;
    cursor: pointer;
  }
`;

const AddButtons = styled.div`
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
  onClickDeleteHallButton: (id: number) => void;
}

function HallAddForm({
  id,
  name,
  onChangeHallName,
  onClickDeleteHallButton,
}: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChangeHallName({ id, name: value });
  };

  const handleClick = () => {
    onClickDeleteHallButton(id);
  };

  return (
    <Container key={id}>
      <Wrapper>
        <input
          type="text"
          value={name}
          placeholder="관명"
          onChange={handleChange}
        />
        <button type="button" onClick={handleClick}>
          전시관 삭제
        </button>
      </Wrapper>
      <AddButtons>
        {Array.from({ length: 10 }, (_, i) => (
          <button key={i} type="button">
            작품
            <br />
            등록
          </button>
        ))}
      </AddButtons>
    </Container>
  );
}

export default HallAddForm;
