import { type Request, type Response, Router } from 'express';

export const healthCheck = Router();

healthCheck.get('/health', (request: Request, response: Response) =>
	response.status(200).send('OK').end()
);
