import LoginButton from '../Auth/LoginButton';
import Profile from '../Auth/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../Auth/LogoutButton';
import { useEffect } from 'react';

const Auth = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getToken = async () => {
      const accessToken = await getAccessTokenSilently();
      console.log('accessToken', accessToken);
    };

    void getToken();
  }, [getAccessTokenSilently]);
  return (
    <div className="flex m-auto gap-3">
      {isAuthenticated && <Profile />}
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default Auth;
