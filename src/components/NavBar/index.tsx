import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import TapButton from '../TapButton';
import { PATH } from '../../constants/path';
import SignInContainer from '../../containers/SignInContainer';
import AuthButton from '../AuthButton';
import SearchContainer from '../../containers/SearchContainer';

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
        <SearchContainer />
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
  padding: 0 5%;
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

const NavBarRight = styled.div``;

const NavBarLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  > button:not(:first-child) {
    margin-left: 10px;
  }
`;
