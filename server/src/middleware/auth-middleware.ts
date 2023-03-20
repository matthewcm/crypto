import process from 'node:process';
import { auth } from 'express-oauth2-jwt-bearer';

const jwtCheck = auth({
  audience: String(process.env.AUTH0_AUDIENCE),
  issuerBaseURL: String(process.env.AUTH0_ISSUER_URL),
  tokenSigningAlg: 'RS256',
});

export default jwtCheck;
