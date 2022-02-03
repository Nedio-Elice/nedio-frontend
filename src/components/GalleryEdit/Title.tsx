import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    width: 100%;
  }
`;

interface Props {
  label: string;
  title: string;
  placeholder: string;
  onChange: (value: string, name: string) => void;
}

function Title({ label, title, placeholder, onChange }: Props) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;

    onChange(value, name);
  };

  return (
    <Container>
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Container>
  );
}

export default Title;
