import { type NextFunction, type Response, type Request } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response.status(status).send({
      status,
      message,
    });
  } catch (err) {
    next(err);
  }
};

export default errorMiddleware;
