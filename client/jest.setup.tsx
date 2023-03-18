import { PropsWithChildren } from 'react';
jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }: PropsWithChildren) => <div>{children}</div>,

  useAuth0: jest.fn(() => ({
    isAuthenticated: true,
    loginWithRedirect: jest.fn(),
    getAccessTokenSilently: jest.fn(),
  })),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
}));

jest.spyOn(console, 'log').mockImplementation(() => {});

import '@testing-library/jest-dom/extend-expect';
