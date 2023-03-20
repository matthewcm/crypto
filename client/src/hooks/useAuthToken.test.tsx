import { renderHook, waitFor } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuthToken } from './useAuthToken';

describe('useAuthToken', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should set authToken when isAuthenticated is true', async () => {
    const sampleAccessToken = 'sample_auth_token';

    const getAccessTokenSilently = jest.fn(() => Promise.resolve(sampleAccessToken));
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      getAccessTokenSilently,
    });

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.authToken).toBeUndefined();


    await waitFor(() => {
      expect(result.current.authToken).toBe(sampleAccessToken);
    });

  });

  it('should not set authToken when isAuthenticated is false', async () => {
    const getAccessTokenSilently = jest.fn();
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      getAccessTokenSilently,
    });

    const { result } = renderHook(() => useAuthToken());

    await waitFor(() => {
      expect(result.current.authToken).toBeUndefined();
      expect(useAuth0().getAccessTokenSilently).not.toHaveBeenCalled();
    });
  });
});
