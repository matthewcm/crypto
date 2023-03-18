import request from 'supertest';
import errorMiddlware from './error-middleware';
import errorMiddleware from './error-middleware';
import HttpException from '../exceptions/HttpException';
import { NextFunction, Request, Response, response } from 'express';
import {
  createRequest, createResponse, MockRequest, MockResponse,
} from 'node-mocks-http';

describe('Error Middleware', () => {
  it('should handle an error', () => {
    const mockError: HttpException = {
      status: 500,
      message: 'Internal Server Error',
    } as HttpException;
    const mockRequest = createRequest({
        
    });

    const mockResponse: MockResponse<Response> = createResponse();
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

    const mockResponse: MockResponse<Response> = createResponse();
    const mockNext = jest.fn();

    errorMiddleware(mockError, mockRequest, mockResponse, mockNext as NextFunction);

    const result = mockResponse._isEndCalled();

    expect(result).toEqual(true);
  });
});

