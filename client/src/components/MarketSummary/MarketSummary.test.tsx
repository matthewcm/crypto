import { useAuth0 } from '@auth0/auth0-react';
import { render, screen, waitFor } from '@testing-library/react';
import MarketSummary from './MarketSummary';
import { MarketSummary as MarketSummaryType } from '../../types/MarketSummary';
import { WithProviders } from '../../utils/testUtils';

jest.mock('./useMarketSummaryLogic');

describe('MarketSummary', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should ask user to log in if not authenticated', async () => {

    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });

    render(
      <WithProviders>
        <MarketSummary />
      </WithProviders>,
    );

    await waitFor(() => {

      expect(screen.getByText(/Please log in/i)).toBeInTheDocument();
    });
 
  });

  it('should render the market summary table with the provided data', async () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
    });
    const sampleMarkets: MarketSummaryType[] = [
      {
        symbol: 'BTC-ETH',
        high: '0.032',
        low: '0.031',
        volume: '1000',
        quoteVolume: '2000',
        percentChange: '1.5',
        updatedAt: '2023-03-15T10:00:00Z',
      },
    ];

    render(
      <WithProviders preloadedState={{
        marketSummaryList: sampleMarkets,
      }}>
        <MarketSummary />
      </WithProviders>,
    );

    await waitFor(() => {

      const marketName = screen.getByText('BTC');
      const percentChange = screen.getByText('1.5%');

      expect(marketName).toBeInTheDocument();
      expect(percentChange).toBeInTheDocument();
      expect(percentChange.className).toContain('text-green-600');
    });
  });
  
  it('should render the market summary table with the provided data and default percent change to 0', async () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
    });
    const sampleMarkets: MarketSummaryType[] = [
      {
        symbol: 'BTC-ETH',
        high: '0.032',
        low: '0.031',
        volume: '1000',
        quoteVolume: '2000',
        percentChange: undefined,
        updatedAt: '2023-03-15T10:00:00Z',
      },
    ];

    render(
      <WithProviders preloadedState={{
        marketSummaryList: sampleMarkets,
      }}>
        <MarketSummary />
      </WithProviders>,
    );

    await waitFor(() => {

      const marketName = screen.getByText('BTC');
      const percentChange = screen.getByText('0%');

      expect(marketName).toBeInTheDocument();
      expect(percentChange).toBeInTheDocument();
      expect(percentChange.className).toContain('text-gray-500');
    });
  });

  it('should render an empty table when there are no markets', async () => {
    render(
      <WithProviders>
        <MarketSummary />
      </WithProviders>,
    );

    await waitFor(() => {

      const marketName = screen.queryByText('BTC');
      const percentChange = screen.queryByText('1.5%');

      expect(marketName).not.toBeInTheDocument();
      expect(percentChange).not.toBeInTheDocument();
    });
  });
});


