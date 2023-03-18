import { Router } from 'express';
import { healthCheck } from './health-check';
import { statusRoute } from './status';
import { protectedEndpoints } from './protected';
import { marketSummary } from './market-summary';

export const routes = Router();

routes.use(healthCheck);
routes.use(statusRoute);
routes.use(protectedEndpoints);
routes.use(marketSummary);
