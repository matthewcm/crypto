import express, { type Express, json } from 'express';
import { routes } from './routes';
import errorMiddleware from './middleware/error-middleware';

const app: Express = express();

app.use(json());
app.use('/', routes);
app.use(errorMiddleware);

export default app;
