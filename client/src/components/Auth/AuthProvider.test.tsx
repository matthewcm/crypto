// AuthProvider.test.tsx
import { render, screen } from '@testing-library/react';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthProvider from './AuthProvider';

jest.mock('@auth0/auth0-react', () => {
	return {
		Auth0Provider: jest.fn(({ children }) => <div>{children}</div>),
	};
});

describe('AuthProvider component', () => {
	test('renders Auth0Provider with correct props', () => {
		render(
			<AuthProvider>
				<div>Test content</div>
			</AuthProvider>,
		);

		expect(Auth0Provider).toHaveBeenCalled()
	});

	test('renders children inside Auth0Provider', () => {
		render(
			<AuthProvider>
				<div>Test content</div>
			</AuthProvider>
		);

		expect(screen.getByText(/Test content/i)).toBeInTheDocument();
	});
});
