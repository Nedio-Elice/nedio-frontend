import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import SearchSelect from '../../components/SearchSelect';
import { PATH } from '../../constants/path';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetKeyword, setKeyword, setOption } from '../../store/search';

function SearchContainer() {
  const keyword = useAppSelector((state) => state.search.keyword);
  const selectedOption = useAppSelector((state) => state.search.option);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const initKeyword = () => dispatch(resetKeyword());

  const handleKeyword = (value: string) => dispatch(setKeyword(value));

  const handleSelectOption = (value: string) => dispatch(setOption(value));

  const handleSubmit = () => {
    if (keyword.length < 1) return;
    navigation(`${PATH.GALLERY_SEARCH}?${selectedOption}=${keyword}`);
  };

  return (
    <>
      <SearchBar
        keyword={keyword}
        handleKeyword={handleKeyword}
        resetKeyword={initKeyword}
        handleSubmit={handleSubmit}
      />
      <SearchSelect
        option={selectedOption}
        handleSelectOption={handleSelectOption}
      />
    </>
  );
}

export default SearchContainer;
