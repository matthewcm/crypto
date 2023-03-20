jest.mock('../Auth/useAuthToken', () => ({
  useAuthToken: jest.fn(),
}));

import { PropsWithChildren } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { renderHook, waitFor } from '@testing-library/react';

import { useMarketSummaryLogic } from './useMarketSummaryLogic';
import { MarketSummary } from '../../types/MarketSummary';
import { useAuthToken } from '../Auth/useAuthToken';
import marketSlice from '../../features/market/marketSlice';
import { WithProviders } from '../../utils/testUtils';

const renderHookWithProviders = (preloadedState: any) => {

  const store = configureStore({
    reducer: {
      marketSummaryList:  marketSlice,
    }, 
    preloadedState,
  });

  const wrapper = ({ children }: PropsWithChildren) => {
    return (
      <WithProviders preloadedState={preloadedState} store={store}>
        {children}
      </WithProviders>
    );
  };
  const r = renderHook(() => useMarketSummaryLogic(), {
    wrapper,
  });

  return {
    r,
    store,
  };
};

describe('useMarketSummaryLogic hook', () => {

  const mockedMarketSummary: MarketSummary[] = [{
    symbol: '1ECO-BTC',
    high: '0.000017440000',
    low: '0.000015640000',
    volume: '431.51000000',
    quoteVolume: '0.00710040',
    percentChange: '-3.30',
    updatedAt: '2023-03-18T15:02:56.843Z',
  }];
  it('should return market summary', async () => {
    // const mockDispatch = jest.fn();
    (axios.get as jest.Mock).mockResolvedValue({
      data: mockedMarketSummary,
    });
    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: 'jwtToken',
    });
    // (useDispatch as jest.Mock).mockImplementation(
    //   () => mockDispatch,
    // );

    const preloadedState = {
      marketSummaryList: mockedMarketSummary,
    };
    const store = configureStore({
      reducer: {
        marketSummaryList:  marketSlice,
      }, 
      preloadedState,
    });

    const wrapper = ({ children }: PropsWithChildren) => {
      return (
        <WithProviders preloadedState={preloadedState} store={store}>
          {children}
        </WithProviders>
      );
    };
    renderHook(() => useMarketSummaryLogic(), {
      wrapper,
    });

    await waitFor(() => {
      expect(store.getState().marketSummaryList).toEqual(mockedMarketSummary);
    });


  });
  
  it('should log error when endpoint is down', async () => {
    jest.spyOn(console, 'error').mockImplementation();
    (axios.get as jest.Mock).mockRejectedValue({
      response: {
        status: 500,
      },
    });

    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: 'jwtToken',
    });
    

    const preloadedState = {
      marketSummaryList: mockedMarketSummary,
    };
    const store = configureStore({
      reducer: {
        marketSummaryList:  marketSlice,
      }, 
      preloadedState,
    });

    const wrapper = ({ children }: PropsWithChildren) => {
      return (
        <WithProviders preloadedState={preloadedState} store={store}>
          {children}
        </WithProviders>
      );
    };
    renderHook(() => useMarketSummaryLogic(), {
      wrapper,
    });

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });


  });

  describe('percentChangeColor', () => {
    it('should return appropiate colors based on percent change', async () => {
      const preloadedState = {
      };
      const store = configureStore({
        reducer: {
          marketSummaryList:  marketSlice,
        }, 
        preloadedState,
      });

      const wrapper = ({ children }: PropsWithChildren) => {
        return (
          <WithProviders preloadedState={preloadedState} store={store}>
            {children}
          </WithProviders>
        );
      };
      const { result } = renderHook(() => useMarketSummaryLogic(), {
        wrapper,
      });
      const { percentChangeColor } = result.current;
      await waitFor(() => {
        expect(percentChangeColor(5)).toContain('green');
        expect(percentChangeColor(-5)).toContain('red');
        expect(percentChangeColor(0)).toContain('gray');
      });

    });
  });
});
