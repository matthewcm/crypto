import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

describe('Profile component', () => {

  const user = {
    name: 'Cake',
    picture: 'https://slice-of-cake.com/cake.jpg',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders profile when loaded', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isLoading: false,
      user,
    });
    render(<Profile />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  test('renders loading.. whilst auth is still loading', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isLoading: true,
      user,
    });

    render(<Profile />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });

  test('handles loading... when user is still loading', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isLoading: false,
      user: null,
    });

    render(<Profile />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  });
});

