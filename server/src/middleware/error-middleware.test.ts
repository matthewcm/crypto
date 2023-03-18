import errorMiddleware from './error-middleware';
import HttpException from '../exceptions/HttpException';
import { NextFunction, Response } from 'express';
import {
  createRequest, createResponse
} from 'node-mocks-http';

describe('Error Middleware', () => {
  it('should handle an error', () => {
    const mockError: HttpException = {
      status: 500,
      message: 'Internal Server Error',
    } as HttpException;
    const mockRequest = createRequest({
        
    });

    const mockResponse = createResponse();
    const mockNext = jest.fn();

    errorMiddleware(mockError, mockRequest, mockResponse, mockNext as NextFunction);

    const result = mockResponse._isEndCalled();

    expect(result).toEqual(true);
  });
  it('should handle an error', () => {
    const mockError: HttpException = {
      status: 500,
      message: 'Internal Server Error',
    } as HttpException;
    const mockRequest = createRequest({
        
    });

    const mockResponse = createResponse();
    const mockNext = jest.fn();

    errorMiddleware(mockError, mockRequest, mockResponse, mockNext as NextFunction);

    const result = mockResponse._isEndCalled();

    expect(result).toEqual(true);
  });
});

