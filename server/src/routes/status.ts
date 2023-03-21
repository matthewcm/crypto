import axios from 'axios';
import {
  Router,
  type Request,
  type Response,
  type RequestHandler,
} from 'express';
import { MARKET_SUMMARY_URL } from '../consts/urls';

export const statusRoute = Router();

type StatusResponse = {
  status: string;
  message: string;
};

enum StatusCodes {
  OKAY = 'OKAY',
  FAIL = 'FAIL',
}

const checkBittrexApiStatus = async (): Promise<StatusResponse> => {
  const statusOKResponse = {
    status: StatusCodes.OKAY,
    message: 'Bittrex API is up and running',
  };

  const statusErrorResponse = {
    status: StatusCodes.FAIL,
    message: 'Bittrex API is down',
  };

  try {
    const response = await axios.get(`${MARKET_SUMMARY_URL}/ping`);

    if (response.status === 200) {
      return statusOKResponse;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error checking Bittrex API:', error.message);
    }
  }
  return statusErrorResponse;
};

// Health check endpoint: /status
statusRoute.get('/status', (async (req: Request, res: Response) => {
  const bittrexApiStatus = await checkBittrexApiStatus();

  const version = String(process.env.npm_package_version);
  const statusResponse = {
    version,
    status: StatusCodes.OKAY,
    checks: [bittrexApiStatus],
  };
  if (bittrexApiStatus.status === StatusCodes.FAIL) {
    statusResponse.status = StatusCodes.FAIL;
  }

  res.status(200).json(statusResponse);
}) as RequestHandler);
