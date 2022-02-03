/* eslint-disable react/button-has-type */
import { useRef } from 'react';
import GoogleLogin from 'react-google-login';
import LoginLogoutButton from '../../components/LoginLogoutButton';
import Modal from '../../components/Modal';

function SignInContainer() {
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <LoginLogoutButton
        tapMenu="로그인"
        handleClick={() => modalRef.current?.show()}
      />
      <Modal ref={modalRef}>
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
      </Modal>
    </>
  );
}

export default SignInContainer;
