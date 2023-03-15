import dotenv from 'dotenv';
import app from './app';
dotenv.config();

const port: number = Number(process.env.PORT);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});