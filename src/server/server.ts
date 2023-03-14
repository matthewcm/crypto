import dotenv from 'dotenv';

import express, { Express } from 'express';
import { routes } from './routes/index.js';

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT);

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});