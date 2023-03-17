import { Router } from 'express';
import { healthCheck } from './health-check';
import { status } from './status';

export const routes = Router();

routes.use(healthCheck);
routes.use(status);
