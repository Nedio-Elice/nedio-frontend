import { useRef } from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import styled from 'styled-components';
import GoogleButton from '../../components/GoogleButton';
import AuthButton from '../../components/AuthButton';
import Modal from '../../components/Modal';
import { useAppDispatch } from '../../store/hooks';
import { signInUser } from '../../store/user';
import useToast from '../../hooks/useToast';
import { MESSAGE } from '../../constants/messages';

function SignInContainer() {
  const modalRef = useRef<React.ElementRef<typeof Modal>>(null);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const onSuccess = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('profileObj' in res) {
      const { email, imageUrl: profileURL, name: nickname } = res.profileObj;
      const userData = {
        email,
        profileURL,
        nickname,
      };
      try {
        const message = await dispatch(signInUser(userData));
        if (message === 'success') {
          toast({
            title: '',
            message: MESSAGE.LOGIN_SUCCESS,
          });
        }
      } catch (e) {
        toast({
          title: '',
          message: MESSAGE.LOGIN_FAIL,
          type: 'error',
        });
      }
    }
  };

  const onFailure = (err: any) => {
    toast({
      title: '',
      message: MESSAGE.LOGIN_FAIL,
      type: 'error',
    });
  };

  return (
    <>
      <AuthButton
        tapMenu="로그인"
        handleClick={() => modalRef.current?.show()}
      />
      <Modal ref={modalRef} width={400} height={480}>
        <Container>
          <Title>Nedio에 오신 것을 환영합니다!</Title>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_API_KEY}
            render={(renderProps) => (
              <>
                <GoogleButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
                <ButtonTitle>Google 로그인</ButtonTitle>
              </>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          />
        </Container>
      </Modal>
    </>
  );
}

export default SignInContainer;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 6rem;
`;

const ButtonTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #565656;
  margin-top: 0;
  margin-top: 0.8rem;
`;
