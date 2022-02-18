import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import TapButton from '../TapButton';
import { PATH } from '../../constants/path';
import SignInContainer from '../../containers/SignInContainer';
import AuthButton from '../AuthButton';
import SearchContainer from '../../containers/SearchContainer';
import logo from '../../assets/icons/logo.png';
import { menu } from '../../constants/icons';
import useOutOfRange from '../../hooks/useOutOfRange';
import { DEVICE } from '../../constants/device';

interface Props {
  isSignIn: boolean;
  signOut: () => void;
  userId: string | undefined;
}

function NavBar({ isSignIn, signOut, userId }: Props) {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useOutOfRange(containerRef, false);

  const handleMenu = () => setIsActive((prevActive) => !prevActive);
  const handleNavMain = () => navigate(`${PATH.MAIN}`);

  const { pathname } = useLocation();

  useEffect(() => {
    setIsActive(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname, setIsActive]);

  return (
    <NavBarContainer ref={containerRef} data-testid="navbar">
      <NavTop>
        <LogoWrapper>
          <MobileLogo src={logo} onClick={handleNavMain} />
          <Logo onClick={handleNavMain}>Nedio</Logo>
        </LogoWrapper>

        <SearchWrapper>
          <SearchContainer />
        </SearchWrapper>
      </NavTop>

      <Hamberger src={menu} onClick={handleMenu} />
      <NavMenu isActive={isActive}>
        {isSignIn ? (
          <>
            <TapButton tapMenu="갤러리 생성" to={PATH.GALLERY_EDIT} />
            <TapButton
              tapMenu="마이 갤러리"
              to={PATH.MY_PAGE}
              userId={userId}
            />
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
      </NavMenu>
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
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
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  user-select: none;
  min-width: 460px;
  padding: 20px 5%;

  @media ${DEVICE.DESKTOP} {
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 5%;
  }
`;

const NavTop = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

const Logo = styled.span`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 40px;
  color: #000000;

  @media ${DEVICE.DESKTOP} {
    display: none;
  }
`;

const MobileLogo = styled.img`
  display: none;
  width: 56px;
  height: 56px;

  @media ${DEVICE.DESKTOP} {
    display: block;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: padding 0.8s;
`;

const NavMenu = styled.div<{ isActive: boolean }>`
  display: flex;

  > button:not(:first-child) {
    margin-left: 10px;
  }

  @media ${DEVICE.DESKTOP} {
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    align-items: center;

    > button {
      background-color: transparent;
      box-shadow: none;
      border-radius: 8px;
      width: 100%;

      margin: 5px 0;

      &:hover {
        background: #f2f3f5;
        box-shadow: none;
      }
      &:not(:first-child) {
        margin-left: 0px;
      }
    }
  }
`;

const Hamberger = styled.img`
  display: none;
  position: absolute;
  top: 20px;
  right: 5%;
  width: 25px;
  height: 25px;
  cursor: pointer;

  @media ${DEVICE.DESKTOP} {
    display: block;
  }
`;
