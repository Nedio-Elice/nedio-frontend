import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as XIcon } from '../../assets/icons/x-icon.svg';
import TapButton from '../TapButton';
import LoginLogoutButton from '../LoginLogoutButton';
import { PATH } from '../../constants/path';

function NavBar() {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <>
      <NavBarContainer>
        <NavBarLeft>
          <Link to={PATH.MAIN} style={{ textDecoration: 'none' }}>
            <Logo>Nedio</Logo>
          </Link>
        </NavBarLeft>
        <NavBarCenter>
          <SearchBar>
            <SearchIcon style={{ marginLeft: 19 }} />
            <SearchInput placeholder="검색어를 입력해주세요" />
            <XIcon />
          </SearchBar>
          <SearchSelect>
            <option value="title" hidden>
              제목 검색
            </option>
            <option value="author">작가 검색</option>
          </SearchSelect>
        </NavBarCenter>
        <NavBarRight>
          <NavBarLinks>
            <TapButton tapMenu="갤러리 생성" to={PATH.GALLERY_EDIT} />
            <TapButton tapMenu="마이 갤러리" to={PATH.MY_PAGE} />
            {isLogined ? (
              <LoginLogoutButton tapMenu="Log out" />
            ) : (
              <LoginLogoutButton tapMenu="Log in" />
            )}
          </NavBarLinks>
        </NavBarRight>
      </NavBarContainer>
      <NavBorder />
    </>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 999;
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  );
`;

const NavBarLeft = styled.div`
  flex: 2;
`;

const Logo = styled.span`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 48px;
  margin-left: 48px;
  cursor: pointer;
  color: #000000;
`;

const NavBarCenter = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 320px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  box-shadow: inset -3px -3px 7px #ffffff,
    inset 3px 3px 7px rgba(156, 156, 156, 0.48);
`;

const SearchInput = styled.input`
  border: none;
  width: 75%;
  margin-left: 11px;

  &:focus {
    outline: none;
  }
`;

const SearchSelect = styled.select`
  width: 100px;
  height: 30px;
  background: #ffffff;
  color: #777777;
  padding-left: 5px;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid rgba(209, 209, 209, 0.38);
  border-radius: 5px;
  margin-left: 10px;

  option {
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const NavBarRight = styled.div`
  flex: 5;
`;

const NavBarLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavBorder = styled.div`
  position: sticky;
  top: 64px;
  width: 100%;
  height: 2px;
  background-color: #e5e5e5;
`;
