jest.mock('../../hooks/useAuthToken', () => ({
  useAuthToken: jest.fn(),
}));

import { PropsWithChildren } from 'react';
import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';

import { useMarketSummaryLogic } from './useMarketSummaryLogic';
import { MarketSummary } from '../../types/MarketSummary';
import { useAuthToken } from '../../hooks/useAuthToken';
import { WithProviders } from '../../utils/testUtils';
import { RootState, setupStore } from '../../app/store';

const renderHookWithProviders = (preloadedState: RootState) => {

  const store = setupStore(
    preloadedState,
  );

  const wrapper = ({ children }: PropsWithChildren) => {
    return (
      <WithProviders preloadedState={preloadedState} store={store}>
        {children}
      </WithProviders>
    );
  };
  const { result } = renderHook(() => ( 
    useMarketSummaryLogic()
  ), { wrapper });

  return {
    result,
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
    (axios.get as jest.Mock).mockResolvedValue({
      data: mockedMarketSummary,
    });
    (useAuthToken as jest.Mock).mockReturnValue({
      authToken: 'jwtToken',
    });

    const preloadedState = {
      marketSummaryList: mockedMarketSummary,
    };

    const { store } = renderHookWithProviders(preloadedState);
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
  
    renderHookWithProviders(preloadedState);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });


  });

});
