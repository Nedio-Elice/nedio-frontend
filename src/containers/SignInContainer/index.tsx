/* eslint-disable react/button-has-type */
import { useCallback, useEffect, useRef, useState } from 'react';
import GoogleLogin from 'react-google-login';
import LoginLogoutButton from '../../components/LoginLogoutButton';
import SignInModal from '../../components/SignInModal';

function SignInContainer() {
  const modal = useRef<HTMLInputElement>(null);
  const [modalState, setModalState] = useState(false);

  const onClose = () => setModalState(false);
  const onOpen = () => setModalState(true);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!modal.current?.contains(e.target as Node)) {
        if (modalState) onClose();
      }
    },
    [modalState],
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <LoginLogoutButton tapMenu="로그인" handleClick={onOpen} />
      <SignInModal ref={modal} modalState={modalState} onClose={onClose}>
        {/* TODO: modal 내부 구현 */}
        <h3>Nedio에 오신 것을 환영합니다!</h3>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_API_KEY}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              custom Google button
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </SignInModal>
    </>
  );
}

export default SignInContainer;
