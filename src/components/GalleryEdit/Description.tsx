import styled from 'styled-components';
import { inputArea, placeholders } from '../../styles/mixins';

interface Props {
  label: string;
  description: string;
  placeholder: string;
  onChange: (value: string, name: string) => void;
}

function Description({ label, description, placeholder, onChange }: Props) {
  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.currentTarget;

    onChange(value, name);
  };

  return (
    <Container>
      <label htmlFor="description">{label}</label>
      <textarea
        wrap="virtual"
        name="description"
        id="description"
        value={description}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
}

export default Description;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: start;
  textarea {
    ${inputArea}
    ${placeholders}
    width: 100%;
    height: 100%;
    padding-top: 0.3em;
    overflow: auto;
  }
`;
