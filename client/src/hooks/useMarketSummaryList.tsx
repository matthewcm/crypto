import { useCallback, useEffect, useState } from 'react';
import { useAuthToken } from './useAuthToken';
import { MarketSummary } from '../types/MarketSummary';
import { authRequest } from '../services/authRequest';

export const useMarketSummaryList = () => {
  const { authToken } = useAuthToken();

  const [marketSummary, setMarketSummary] = useState<MarketSummary[]>([]);
  
  const fetchMarketSummaryList = useCallback(( async () => {

    try {
      const endpoint = 'summary';
      if (!authToken) return;
      const res = await authRequest<MarketSummary[]>(endpoint, authToken);
      setMarketSummary(res);
     
    } catch (err) {
      console.error(err);
    }
  }), [authToken]);

  useEffect(() => {
    void fetchMarketSummaryList();
  }, [fetchMarketSummaryList]);
  
  return marketSummary;
};

