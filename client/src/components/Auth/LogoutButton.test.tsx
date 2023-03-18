import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

describe('LogoutButton component', () => {

  const mockLogout = jest.fn(); 
 

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Logout button', () => {
    render(<LogoutButton />);
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
  });
  test('clicking logout calls auth logout', () => {
 
    (useAuth0 as jest.Mock).mockReturnValue({
      logout: mockLogout,
    });

    render(<LogoutButton />);
    const logoutButton = screen.getByText(/Log out/i);

    logoutButton.click();
    expect(mockLogout).toHaveBeenCalled();
  });

});


