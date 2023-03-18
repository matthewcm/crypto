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
    const httpException = {
      message: 'Unauthorized', 
      status: 401,
    } as HttpException;
    (jwtCheck as jest.Mock).mockImplementation(() => { 
      throw httpException;
    });
    const res = await request(app).get('/protected');

    expect(res.body).toEqual(httpException);
  });
});
