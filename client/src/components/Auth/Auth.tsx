import LoginButton from '../LoginButton/LoginButton';
import Profile from '../Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../LogoutButton/LogoutButton';

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
