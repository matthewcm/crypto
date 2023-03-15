import { Request, Response, Router } from "express";

export const getHealth = Router();

getHealth.get('/health', (req: Request, res: Response) => {
  return res.status(200).send('OK').end();
});
