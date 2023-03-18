
import axios from 'axios';
import { type Request, type Response, Router, RequestHandler, NextFunction } from 'express';
import jwtCheck from '../middleware/auth-middleware';
import { MarketSummary } from '../types/MarketSummary';
import { MARKET_SUMMARY_URL } from '../consts/urls';

type MarketSummaryResponse = {
  code: string
};
export const marketSummary = Router();

marketSummary.get('/summary', jwtCheck, (async (request: Request, response: Response, next: NextFunction)=>{
  try {
    const res = await axios.get(`${MARKET_SUMMARY_URL}/summaries`);

    const marketSummaryData = res.data as MarketSummary[];

    response.status(200).json(marketSummaryData).end();
  } catch (error) {
    next(error);
  }

}) as RequestHandler);

marketSummary.get('/summary/:symbol', jwtCheck, (async (request: Request, response: Response, next: NextFunction)=>{
  const { symbol } = request.params;
  try {
    const res = await axios.get(`${MARKET_SUMMARY_URL}/${symbol}/summary`);

    const marketSummaryData = res.data as MarketSummary | MarketSummaryResponse;

    response.status(200).json(marketSummaryData).end();
  } catch (error) {
    next(error);
  }

}) as RequestHandler);
