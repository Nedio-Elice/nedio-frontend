import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import TapButton from '../TapButton';
import { PATH } from '../../constants/path';
import SignInContainer from '../../containers/SignInContainer';
import { SearchIcon, XIcon } from '../../constants/icons';
import AuthButton from '../AuthButton';

interface Props {
  isSignIn: boolean;
  signOut: () => void;
}

function NavBar({ isSignIn, signOut }: Props) {
  const navigate = useNavigate();

  const handleNavMain = () => navigate(`${PATH.MAIN}`);

  return (
    <NavBarContainer>
      <NavBarLeft>
        <Logo onClick={handleNavMain}>Nedio</Logo>
      </NavBarLeft>

      <NavBarCenter>
        <SearchBar>
          <SearchIcon />
          <SearchInput placeholder="검색어를 입력해주세요" />
          {/* <XIcon /> */}
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
          {isSignIn ? (
            <>
              <TapButton tapMenu="갤러리 생성" to={PATH.GALLERY_EDIT} />
              <TapButton tapMenu="마이 갤러리" to={PATH.MY_PAGE} />
              <GoogleLogout
                clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                buttonText="Logout"
                onLogoutSuccess={signOut}
                render={(renderProps) => (
                  <AuthButton
                    handleClick={renderProps.onClick}
                    tapMenu="로그아웃"
                  />
                )}
              />
            </>
          ) : (
            <SignInContainer />
          )}
        </NavBarLinks>
      </NavBarRight>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    #f2f3f5 0.59%,
    #ffffff 49.78%,
    #f2f3f5 100%
  );
  z-index: 9999;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 0 45px;
  user-select: none;
`;

const NavBarLeft = styled.div``;

const Logo = styled.span`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 40px;
  cursor: pointer;
  color: #000000;
`;

const NavBarCenter = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  width: 320px;
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: inset -1.5px -1.5px 5px #f2f3f5, inset 3px 3px 5px #e1e2e4;
  border-radius: 50px;
  padding: 0 10px;
`;

const SearchInput = styled.input`
  border: none;
  width: 75%;
  margin-left: 11px;
  background: transparent;

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
  outline: none;

  option {
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const NavBarRight = styled.div``;

const NavBarLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  > button:not(:last-child) {
    margin-right: 10px;
  }
`;
