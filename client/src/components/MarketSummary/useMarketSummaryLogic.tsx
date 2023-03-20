import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMarketSummaryList } from '../../features/market/marketSlice';
import { useMarketSummaryList } from '../../hooks/useMarketSummaryList';

export const useMarketSummaryLogic = () => {
  const dispatch = useDispatch();
  const marketSummaryList = useMarketSummaryList();

  useEffect(() => {
    if (marketSummaryList) {
      dispatch(setMarketSummaryList(
        marketSummaryList,
      ));

    }
  }, [marketSummaryList, dispatch]);

};
