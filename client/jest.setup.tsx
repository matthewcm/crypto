import { PropsWithChildren } from 'react';
jest.mock('@auth0/auth0-react', () => ({
	Auth0Provider: ({ children }: PropsWithChildren) => <div>{children}</div>,

	useAuth0: jest.fn(() => ({
		isAuthenticated: false,
		loginWithRedirect: jest.fn(),
		getAccessTokenSilently: jest.fn(),
	})),
}));

import '@testing-library/jest-dom/extend-expect';
