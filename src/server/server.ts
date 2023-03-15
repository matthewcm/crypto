import process from 'node:process';
import dotenv from 'dotenv';
import express, { json, type Express } from 'express';
import { routes } from './routes/index.js';

dotenv.config();

const app: Express = express();
const port = Number(process.env.PORT);

app.use(json());

app.use('/', routes);

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
