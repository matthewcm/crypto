import { type NextFunction, type Response, type Request } from 'express';
import HttpException from '../exceptions/HttpException';

const errorMiddleware = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  // Axios bug: does not return error.status
  const errorObject = JSON.parse(
    JSON.stringify(error),
  ) as HttpException;

  const { 
    status = 500,
    message = 'Something went wrong',
  } = errorObject;

  response.status(status).send({
    status,
    message,
  });
};

export default errorMiddleware;
