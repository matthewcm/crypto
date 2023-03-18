import { render, screen, waitFor } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import Auth from './Auth';

describe('Auth component', () => {
  const getAccessTokenSilently = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders LoginButton when not authenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      getAccessTokenSilently,
    });
    render(<Auth />);
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
  });

  test('renders LogoutButton and Profile when authenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      getAccessTokenSilently,
    });

    render(<Auth />);
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  test('calls getAccessTokenSilently when authenticated', async () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      getAccessTokenSilently,
    });

    render(<Auth />);
    await waitFor(() =>
      expect(getAccessTokenSilently).toHaveBeenCalledTimes(1),
    );
  });
});
