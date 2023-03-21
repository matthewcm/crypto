import { render, screen } from '@testing-library/react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

describe('LoginButton component', () => {

  const mockLogin = jest.fn(); 
 

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders Login button', () => {
    render(<LoginButton />);
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
  });
  test('clicking login calls auth login', () => {
 
    (useAuth0 as jest.Mock).mockReturnValue({
      loginWithRedirect: mockLogin,
    });

    render(<LoginButton />);
    const loginButton = screen.getByText(/Log in/i);

    loginButton.click();
    expect(mockLogin).toHaveBeenCalled();
  });

});



