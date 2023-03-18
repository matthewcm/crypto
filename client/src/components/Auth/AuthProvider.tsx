import { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({ children }: PropsWithChildren) => {
	const domain = String(process.env.AUTH0_DOMAIN);
	const clientId = String(process.env.AUTH0_CLIENT_ID);
	const audience = String(process.env.AUTH0_AUDIENCE);

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				audience,
				redirect_uri: window.location.origin,
			}}
		>
			{children}
		</Auth0Provider>
	);
};

export default AuthProvider;
