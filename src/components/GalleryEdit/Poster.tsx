import styled from 'styled-components';

interface ContainerProps {
  width: string;
  height: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 1em;
  min-width: 230px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  input {
    display: none;
  }
`;

interface Props {
  label: string;
  width: string;
  height: string;
}

function Poster({ label, width, height }: Props) {
  return (
    <Container width={width} height={height}>
      <label htmlFor="posterUpload">{label}</label>
      <input type="file" id="posterUpload" />
    </Container>
  );
}

export default Poster;
