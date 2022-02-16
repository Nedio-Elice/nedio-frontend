import { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import { signInUserByToken, signOutUser } from '../../store/user';
import { getToken } from '../../utils/auth';

function NavContainer() {
  const isSignIn = useAppSelector((state: RootState) => state.users.isSignIn);
  const userId = useAppSelector((state: RootState) => state.users.userInfo._id);
  const dispatch = useAppDispatch();

  const handleSignOut = () => dispatch(signOutUser());

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(signInUserByToken(token));
    }
  }, [dispatch]);

  return <NavBar isSignIn={isSignIn} signOut={handleSignOut} userId={userId} />;
}

export default NavContainer;
