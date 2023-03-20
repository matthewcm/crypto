jest.mock('../../hooks/useAuthToken', () => ({
  useAuthToken: jest.fn(),
}));

import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';

import { useSearchMarketLogic } from './useSearchMarketLogic';
import { MarketSummary } from '../../types/MarketSummary';
import { useAuthToken } from '../../hooks/useAuthToken';

describe('useSearchMarketLogic hook', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockedMarketSummary: MarketSummary = {
    symbol: '1ECO-BTC',
    high: '0.000017440000',
    low: '0.000015640000',
    volume: '431.51000000',
    quoteVolume: '0.00710040',
    percentChange: '-3.30',
    updatedAt: '2023-03-18T15:02:56.843Z',
  };
  it('should return empty summary if not used search yet', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: mockedMarketSummary,
    });

    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: 'jwtToken',
    });
    

    const { result } = renderHook(() => useSearchMarketLogic());

    await waitFor(() => {
      expect(result.current.market).toEqual({});
    });


  });
  it('should return empty summary if no auth token', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: mockedMarketSummary,
    });

    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: null,
    });

    const { result } = renderHook(() => useSearchMarketLogic());

    await waitFor(() => {
      result.current.handleChange({
        label: '1ECO-BTC',
        value: '1ECO-BTC',
      });
      expect(result.current.market).toEqual({});
    });

  });
  it('should return empty summary if null search option', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: mockedMarketSummary,
    });

    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: null,
    });

    const { result } = renderHook(() => useSearchMarketLogic());

    await waitFor(() => {
      result.current.handleChange(null);
      expect(result.current.market).toEqual({});
    });
  });
  it('should return market summary after search', async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: mockedMarketSummary,
    });

    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: 'jwtToken',
    });
    
    const { result } = renderHook(() => useSearchMarketLogic());

    await waitFor(() => {
      result.current.handleChange({
        label: '1ECO-BTC',
        value: '1ECO-BTC',
      });
      expect(result.current.market).toEqual(mockedMarketSummary);
    });

  });

  it('should console error if backend has error', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    (axios.get as jest.Mock).mockRejectedValue({
      response: {
        status: 500,
      },
    });

    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: 'jwtToken',
    });
    

    const { result } = renderHook(() => useSearchMarketLogic());

    await waitFor(() => {
      result.current.handleChange({
        label: '1ECO-BTC',
        value: '1ECO-BTC',
      });
      expect(result.current.market).toEqual({});
      expect(console.error).toHaveBeenCalled();
    });

  });
  
});
