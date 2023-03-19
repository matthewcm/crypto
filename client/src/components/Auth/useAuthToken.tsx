import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const useAuthToken = () => {

  const [authToken, setAuthToken] = useState<string>();

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getToken = async () => {
      const accessToken = await getAccessTokenSilently();
      setAuthToken(accessToken);
    };

    if (isAuthenticated) {
      void getToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return {
    authToken,
  };
};
