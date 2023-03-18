import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { type MarketSummary } from '../../types/MarketSummary';
import { useAuthToken } from '../Auth/useAuthToken';

export const useMarketSummaryLogic = () => {
  const [markets, setMarkets] = useState<MarketSummary[]>([]);

  const { authToken } = useAuthToken();

  const fetchDetails = useCallback(async () => {
    try {

      if (!authToken) return null;

      const response = await axios.get('http://localhost:5000/summary', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setMarkets(response.data as MarketSummary[]);
    } catch (error) {
      console.error(error);
    }
  }, [authToken]); 

  useEffect(() => {
    void fetchDetails() ;
  }, [fetchDetails]);

  const percentChangeColor = (change: number) => {
    if (change > 0) {
      return 'text-green-600';
    } else if (change < 0) {
      return 'text-red-800';
    }
    return 'text-gray-500';
  };

  return {
    markets,
    percentChangeColor,
  };
};
