import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import SearchSelect from '../../components/SearchSelect';
import { PATH } from '../../constants/path';

function SearchContainer() {
  const [keyword, setKeyword] = useState('');
  const [selectOption, setSelectOption] = useState('title');
  const navigation = useNavigate();

  const resetKeyword = () => setKeyword('');

  const handleKeyword = (value: string) => setKeyword(value);

  const handleSelectOption = (value: string) => setSelectOption(value);

  const handleSubmit = () => {
    if (keyword.length < 1) return;

    let queryStr;

    switch (selectOption) {
      case 'title': {
        queryStr = `${selectOption}=${keyword}&nickname=&category=`;
        break;
      }

      case 'nickname': {
        queryStr = `title=&${selectOption}=${keyword}&category=`;
        break;
      }

      default:
        queryStr = `title=&nickname=&category=`;
    }
    navigation(`${PATH.GALLERY_SEARCH}?${queryStr}`);
  };

  return (
    <>
      <SearchBar
        keyword={keyword}
        handleKeyword={handleKeyword}
        resetKeyword={resetKeyword}
        handleSubmit={handleSubmit}
      />
      <SearchSelect
        selectOption={selectOption}
        handleSelectOption={handleSelectOption}
      />
    </>
  );
}

export default SearchContainer;
