import process from 'node:process';
import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
