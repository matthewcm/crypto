import { Router } from "express";
import { getHealth } from './healthCheck';

export const routes = Router();

routes.use(getHealth);