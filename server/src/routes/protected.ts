import { type Request, type Response, Router } from 'express';
import jwtCheck from '../middleware/auth-middleware';

export const protectedEndpoints = Router();

protectedEndpoints.get(
  '/protected',
  jwtCheck,
  (_: Request, response: Response) => response.status(200).send('OK').end(),
);
