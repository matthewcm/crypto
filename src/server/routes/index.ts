import { Router } from 'express';
import { healthCheck } from './health-check.js';

export const routes = Router();

routes.use(healthCheck);
