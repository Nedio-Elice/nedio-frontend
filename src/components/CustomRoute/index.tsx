import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

interface Props {
  auth: boolean;
  redirectTo: string;
}

function CustomRoute({ auth, redirectTo }: Props) {
  const isSignIn = useAppSelector((state) => state.user.isSignIn);

  return auth && !isSignIn ? <Navigate replace to={redirectTo} /> : <Outlet />;
}

export default CustomRoute;
