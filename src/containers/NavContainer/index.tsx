import NavBar from '../../components/NavBar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/root';
import { signOutUser } from '../../store/user';

function NavContainer() {
  const isSignIn = useAppSelector((state: RootState) => state.users.isSignIn);
  const dispatch = useAppDispatch();

  const handleSignOut = () => dispatch(signOutUser());

  return <NavBar isSignIn={isSignIn} signOut={handleSignOut} />;
}

export default NavContainer;
