import { Router } from 'express';
import { healthCheck } from './health-check';
import { statusRoute } from './status';
import { protectedEndpoints } from './protected';

export const routes = Router();

routes.use(healthCheck);
routes.use(statusRoute);
routes.use(protectedEndpoints);
