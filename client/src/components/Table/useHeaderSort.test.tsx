
import { renderHook, waitFor } from '@testing-library/react';

import { MarketSummary } from '../../types/MarketSummary';
import { useHeaderSort } from './useHeaderSort';

describe('useHeaderSort hook', () => {

  const mockedMarketSummary: MarketSummary[] = [
    {
      symbol: 'A',
      high: '0.000017440000',
      low: '0.000015640000',
      volume: '431.51000000',
      quoteVolume: '0.00710040',
      percentChange: undefined,
      updatedAt: '2023-03-18T15:02:56.843Z',
    },

    {
      symbol: 'Z',
      high: '0.000017440000',
      low: '0.000015640000',
      volume: '431.51000000',
      quoteVolume: '0.00710040',
      percentChange: undefined,
      updatedAt: '2023-03-18T15:02:56.843Z',
    },

  ];
  it('should handle sort', async () => {
    const { result } = renderHook(() => useHeaderSort(mockedMarketSummary));

    await waitFor(() => {
      result.current.handleSort('symbol');

      expect(result.current.sortedData[0].symbol).toEqual('Z');
    });
    await waitFor(() => {
      result.current.handleSort('symbol');

      expect(result.current.sortedData[0].symbol).toEqual('A');
    });
  
  });

  it('should handle sort of an undefined', async () => {
    const { result } = renderHook(() => useHeaderSort(mockedMarketSummary));

    await waitFor(() => {
      result.current.handleSort('percentChange');
      expect(result.current.sortedData[0].percentChange).toEqual(undefined);
    });
  
  });

});
