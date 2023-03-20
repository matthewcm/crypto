import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { type MarketSummary } from '../../types/MarketSummary';
import { useAuthToken } from '../Auth/useAuthToken';
import { setMarketSummaryList } from '../../features/market/marketSlice';

export const useMarketSummaryLogic = () => {
  const { authToken } = useAuthToken();

  const dispatch = useDispatch();

  const fetchDetails = useCallback(async () => {
    try {

      if (!authToken) return null;

      const response = await axios.get('http://localhost:5000/summary', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      dispatch(setMarketSummaryList(
        response.data as MarketSummary[],
      ));
    } catch (error) {
      console.error(error);
    }
  }, [authToken, dispatch]); 

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
    percentChangeColor,
  };
};
