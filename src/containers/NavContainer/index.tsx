import { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { MESSAGE } from '../../constants/messages';
import useToast from '../../hooks/useToast';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import { signInUserByToken, signOutUser } from '../../store/user';
import { getToken } from '../../utils/auth';

function NavContainer() {
  const isSignIn = useAppSelector((state: RootState) => state.user.isSignIn);
  const userId = useAppSelector((state: RootState) => state.user.userInfo._id);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleSignOut = async () => {
    const message = await dispatch(signOutUser());
    if (message === 'success') {
      toast({
        title: '',
        message: MESSAGE.LOGOUT_SUCCESS,
      });
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(signInUserByToken(token));
    }
  }, [dispatch]);

  return <NavBar isSignIn={isSignIn} signOut={handleSignOut} userId={userId} />;
}

export default NavContainer;
