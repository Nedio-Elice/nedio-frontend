import styled from 'styled-components';
import { DEVICE } from '../../constants/device';
import { SearchIcon, XIcon } from '../../constants/icons';

interface Props {
  keyword: string;
  handleSubmit: () => void;
  handleKeyword: (keyword: string) => void;
  resetKeyword: () => void;
}

function SearchBar({
  keyword,
  handleKeyword,
  resetKeyword,
  handleSubmit,
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleKeyword(value);
  };

  const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Container onSubmit={onSumbit}>
      <SearchIcon />
      <SearchInput
        type="text"
        maxLength={20}
        placeholder="검색어를 입력해주세요"
        value={keyword}
        onChange={onChange}
      />
      {keyword && <XIcon onClick={resetKeyword} />}
    </Container>
  );
}

const Container = styled.form`
  width: 300px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  position: relative;
  transition: width 0.8s;
  background-color: #f2f3f5;

  /* background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  ); */
  /* box-shadow: inset -1.5px -1.5px 3px #f2f3f5, inset 1.5px 1.5px 3px #e1e2e4;
  border-radius: 40px; */
  > svg {
    position: absolute;

    &:first-child {
      left: 10px;
    }
    &:last-child {
      right: 10px;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  @media ${DEVICE.TABLET} {
    width: 200px;
  }
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 0 35px;
  background: transparent;
  color: rgba(104, 104, 104, 0.9);
  font-size: 0.8rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Pretendard-Regular';
    color: rgba(104, 104, 104, 0.5);
    font-size: 0.8rem;
  }
`;

export default SearchBar;
