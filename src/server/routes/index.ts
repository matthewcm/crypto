import express from 'express';
import { getHealth } from './healthCheck.js';

export const routes = express.Router();

routes.use(getHealth);