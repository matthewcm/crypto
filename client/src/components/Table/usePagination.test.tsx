import { renderHook, waitFor } from '@testing-library/react';

import { MarketSummary } from '../../types/MarketSummary';
import { usePagination } from './usePagination';

describe('usePagination hook', () => {

  const mockedMarketSummary: MarketSummary[] = [{
    symbol: '1ECO-BTC',
    high: '0.000017440000',
    low: '0.000015640000',
    volume: '431.51000000',
    quoteVolume: '0.00710040',
    percentChange: '-3.30',
    updatedAt: '2023-03-18T15:02:56.843Z',
  }];
  it('should handle page size change', async () => {

    const { result } = renderHook(() => usePagination(mockedMarketSummary));

    const {
      activePageSize,
      handlePageSize,
    } = result.current; 
    

    await waitFor(() => {
      handlePageSize(10);

      expect(activePageSize).toEqual(10);
    });
  
  });
  it('should handle pagination change', async () => {
    const { result } = renderHook(() => usePagination(mockedMarketSummary));

    const {
      activePage,
      handlePagination,
    } = result.current; 
    
    await waitFor(() => {
      handlePagination(10);

      expect(activePage).toEqual(10);
    });
  });
});
