
import axios from 'axios';
import { type Request, type Response, Router, RequestHandler, NextFunction } from 'express';
import jwtCheck from '../middleware/auth-middleware';

export const marketSummary = Router();

export interface BittrexMarketSummary {
  symbol: string;
  high: number;
  low: number;
  volume: number;
  quoteVolume: number;
  percentChange: number;
  updatedAt: string;
}

marketSummary.get('/summary', jwtCheck,  (async (request: Request, response: Response, next: NextFunction)=>{
  try {
    const res = await axios.get('https://api.bittrex.com/v3/markets/summaries');

    const marketSummaryData = res.data as BittrexMarketSummary[];

    console.log('res', res);
    response.status(200).json(marketSummaryData).end();
  } catch (error) {
    next(error);
  }

}) as RequestHandler);
