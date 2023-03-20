import { useCallback, useEffect, useState } from 'react';
import { useAuthToken } from './useAuthToken';
import { MarketSummary } from '../types/MarketSummary';
import { authRequest } from '../services/authRequest';

export const useMarketSummaryForCurrency = (currency: string) => {
  const { authToken } = useAuthToken();

  const [marketSummary, setMarketSummary] = useState<MarketSummary>({} as MarketSummary);
  
  const fetchMarketSummaryForCurrency = useCallback(( async () => {

    try {
      if (!currency) return;
      const endpoint = `summary/${currency}`;
      if (!authToken) return;
      const res = await authRequest<MarketSummary>(endpoint, authToken);
      setMarketSummary(res);
     
    } catch (err) {
      console.error(err);
    }
  }), [authToken, currency]);

  useEffect(() => {
    void fetchMarketSummaryForCurrency();
  }, [fetchMarketSummaryForCurrency]);
  
  return marketSummary;
};
