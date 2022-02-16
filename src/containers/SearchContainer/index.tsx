import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import SearchSelect from '../../components/SearchSelect';
import { PATH } from '../../constants/path';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetKeyword, setKeyword, setOption } from '../../store/search';

const MIN_KEYWORD_LENGTH = 1;

function SearchContainer() {
  const keyword = useAppSelector((state) => state.search.keyword);
  const selectedOption = useAppSelector((state) => state.search.option);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const [sideKeyword, setSideKeyword] = useState('');
  const { pathname } = useLocation();

  const initKeyword = () => {
    dispatch(resetKeyword());
    setSideKeyword('');
  };
  const handleKeyword = (value: string) => {
    dispatch(setKeyword(value));
    setSideKeyword(value);
  };
  const handleSelectOption = (value: string) => dispatch(setOption(value));

  const handleSubmit = () => {
    let checkKeyword;

    switch (pathname) {
      case PATH.GALLERY_SEARCH: {
        checkKeyword = keyword;
        break;
      }
      default:
        checkKeyword = sideKeyword;
    }

    if (checkKeyword.length < MIN_KEYWORD_LENGTH) return;

    navigation(`${PATH.GALLERY_SEARCH}?${selectedOption}=${checkKeyword}`);
  };

  useEffect(() => {
    if (pathname !== PATH.GALLERY_SEARCH) {
      setSideKeyword('');
    }
  }, [pathname]);

  return (
    <>
      <SearchBar
        keyword={pathname === PATH.GALLERY_SEARCH ? keyword : sideKeyword}
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
