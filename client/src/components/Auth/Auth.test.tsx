import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import Auth from './Auth';

describe('Auth component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders LoginButton when not authenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });
    render(<Auth />);
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
  });

  test('renders LogoutButton and Profile when authenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
    });

    render(<Auth />);
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

});
