import { Outlet, Navigate } from 'react-router-dom';

interface Props {
  auth: boolean;
  redirectTo: string;
}

function CustomRoute({ auth, redirectTo }: Props) {
  // TODO: 로그인 관련 차단
  return auth ? <Navigate replace to={redirectTo} /> : <Outlet />;
}

export default CustomRoute;
