import express, { type Express, json } from 'express';
import { routes } from './routes';

const app: Express = express();

app.use(json());

app.use('/', routes);

export default app;
