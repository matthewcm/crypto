
import { NextFunction, Request, Response } from 'express';
//eslint-disable-next-line
import { createRequest, createResponse } from 'node-mocks-http';
import errorMiddleware from './error-middleware';
import HttpException from '../exceptions/HttpException';

type ApiResponse = Response & ReturnType<typeof createResponse>;
type ApiRequest = Request & ReturnType<typeof createRequest>;

describe('Error Middleware', () => {
  it('should handle an error', () => {
    const mockError = {
      status: 500,
      message: 'Internal Server Error',
    } as HttpException;
    const mockRequest = createRequest<ApiRequest>();

    const mockResponse = createResponse<ApiResponse>();
    const mockNext = jest.fn();

    errorMiddleware(mockError, mockRequest, mockResponse, mockNext as NextFunction);

    const wasCalled = mockResponse._isEndCalled();

    expect(wasCalled).toEqual(true);
    expect(mockResponse._getData()).toEqual(mockError);
  } ) ;
  
  it('should handle any error', () => {
    const mockError = {} as HttpException;
    const mockRequest = createRequest<ApiRequest>();

    const mockResponse = createResponse<ApiResponse>();
    const mockNext = jest.fn();

    errorMiddleware(mockError, mockRequest, mockResponse, mockNext as NextFunction);

    const wasCalled = mockResponse._isEndCalled();

    expect(wasCalled).toEqual(true);
    expect(mockResponse._getData()).toEqual({
      status: 500,
      message: 'Internal Server Error',
    });
  } ) ;
});

