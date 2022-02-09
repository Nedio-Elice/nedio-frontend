import styled from 'styled-components';

interface Props {
  option: string;
  handleSelectOption: (option: string) => void;
}

function SearchSelect({ option, handleSelectOption }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    handleSelectOption(value);
  };

  return (
    <Container onChange={onChange} value={option}>
      <option value="title">제목 검색</option>
      <option value="nickname">작가 검색</option>
    </Container>
  );
}

export default SearchSelect;

const Container = styled.select`
  width: 80px;
  height: 25px;
  padding-left: 2px;
  margin-left: 10px;
  outline: none;
  border: none;
  color: rgba(104, 104, 104, 0.5);
  font-size: 0.7rem;
  border-radius: 15px;
  background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  );
  box-shadow: inset -1.5px -1.5px 3px #f2f3f5, inset 1.5px 1.5px 3px #e1e2e4;

  &:hover {
    cursor: pointer;
  }
`;
