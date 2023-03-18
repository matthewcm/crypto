
import axios from 'axios';
import { type Request, type Response, Router, RequestHandler, NextFunction } from 'express';
import jwtCheck from '../middleware/auth-middleware';
import { MarketSummary } from '../types/MarketSummary';

export const marketSummary = Router();



marketSummary.get('/summary', jwtCheck,  (async (request: Request, response: Response, next: NextFunction)=>{
  try {
    const res = await axios.get('https://api.bittrex.com/v3/markets/summaries');

    const marketSummaryData = res.data as MarketSummary[];

    console.log('marketSummaryData', marketSummaryData);

    console.log('res', res);
    response.status(200).json(marketSummaryData).end();
  } catch (error) {
    next(error);
  }

}) as RequestHandler);
