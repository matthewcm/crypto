import LoginButton from '../Auth/LoginButton';
import Profile from '../Auth/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../Auth/LogoutButton';

const Auth = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex m-auto gap-3">
      {isAuthenticated && <Profile />}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default Auth;
