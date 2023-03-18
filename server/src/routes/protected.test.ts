import { type NextFunction, type Response, type Request } from 'express';
import request from 'supertest';
import app from '../app';
import jwtCheck from '../middleware/auth-middleware';
import HttpException from '../exceptions/HttpException';

jest.mock('../middleware/auth-middleware', () => jest.fn());

type HttpExceptionError = {
  status: number;
  message: string;
};

describe('Protected API', () => {
  it('should return 200 OK', async () => {
    (jwtCheck as jest.Mock).mockImplementation(
      (_req: Request, _res: Response, next: NextFunction) => {
        next();
      },
    );
    const res = await request(app).get('/protected');

    expect(res.status).toBe(200);
    expect(res.text).toBe('OK');
  });
  it('should return 401 Unauthorised', async () => {
    (jwtCheck as jest.Mock).mockImplementation(() => {
      throw new HttpException(401, 'Unauthorized');
    });
    const res = await request(app).get('/protected');

    const error = JSON.parse(res.text) as HttpExceptionError;
    expect(res.status).toBe(401);
    expect(error.message).toBe('Unauthorized');
  });
});
