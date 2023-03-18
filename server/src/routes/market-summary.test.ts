import request from 'supertest';
import app from '../app';
import axios from 'axios';
import { type NextFunction, type Response, type Request } from 'express';
import { type MarketSummary } from '../types/MarketSummary';
import jwtCheck from '../middleware/auth-middleware';
import HttpException from '../exceptions/HttpException';

jest.mock('axios', () => ({
  get: jest.fn(),
  isAxiosError: jest.fn(),
}));

jest.mock('../middleware/auth-middleware', () => jest.fn());

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Market Summary API', () => {
  describe('GET /summary', () => {
    it('should respond with market summary array', async () => {
      (jwtCheck as jest.Mock).mockImplementation(
        (_req: Request, _res: Response, next: NextFunction) => {
          next();
        },
      );

      const mockedMarketSummary: MarketSummary = {
        symbol: '1ECO-BTC',
        high: '0.000017440000',
        low: '0.000015640000',
        volume: '431.51000000',
        quoteVolume: '0.00710040',
        percentChange: '-3.30',
        updatedAt: '2023-03-18T15:02:56.843Z',
        
      };
      mockedAxios.get.mockResolvedValue({ status: 200, data: [{
        ...mockedMarketSummary,
      }] });
      const res = await request(app).get('/summary');

      const [firstMarketSummary] = res.body as MarketSummary[];
      expect(res.statusCode).toEqual(200);
      expect(firstMarketSummary).toEqual(
        mockedMarketSummary,
      );
    });

    it('should respond with "Bittrex API is down" when Bittrex API is down', async () => {
      mockedAxios.isAxiosError.mockReturnValueOnce(true);

      const httpException = {
        message: 'Bittrex API is down', 
        status: 500,
      } as HttpException;
      mockedAxios.get.mockRejectedValue(
        httpException,
      );
      const res = await request(app).get('/summary');
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual(httpException);
    });
  });
  describe('GET /summary/:symbol', () => {
    it('should respond with market summary array', async () => {

    });
  });
});
