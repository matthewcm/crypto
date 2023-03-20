import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import MarketSummary from './MarketSummary';
import { useMarketSummaryLogic } from './useMarketSummaryLogic';
import { MarketSummary as MarketSummaryType } from '../../types/MarketSummary';
import { WithProviders } from '../../utils/testUtils';

jest.mock('./useMarketSummaryLogic');

const mockedUseMarketSummaryLogic = useMarketSummaryLogic as jest.MockedFunction<typeof useMarketSummaryLogic>;

describe('MarketSummary', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should ask user to log in if not authenticated', () => {

    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
    });

    mockedUseMarketSummaryLogic.mockReturnValue({
      percentChangeColor: (change: number) => (change > 0 ? 'text-green-600' : 'text-red-800'),
    });

    render(
      <WithProviders>
        <MarketSummary />
      </WithProviders>,
    );

    expect(screen.getByText(/Please log in/i)).toBeInTheDocument();
 
  });

  it('should render the market summary table with the provided data', () => {
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

    mockedUseMarketSummaryLogic.mockReturnValue({
      percentChangeColor: (change: number) => (change > 0 ? 'text-green-600' : 'text-red-800'),
    });

 
    render(
      <WithProviders preloadedState={{
        marketSummaryList: sampleMarkets,
      }}>
        <MarketSummary />
      </WithProviders>,
    );

    const marketName = screen.getByText('BTC-ETH');
    const percentChange = screen.getByText('1.5%');

    expect(marketName).toBeInTheDocument();
    expect(percentChange).toBeInTheDocument();
    expect(percentChange.className).toContain('text-green-600');
  });

  it('should render an empty table when there are no markets', () => {
    mockedUseMarketSummaryLogic.mockReturnValue({
      percentChangeColor: (change: number) => (change > 0 ? 'text-green-600' : 'text-red-800'),
    });

    render(
      <WithProviders>
        <MarketSummary />
      </WithProviders>,
    );

    const marketName = screen.queryByText('BTC-ETH');
    const percentChange = screen.queryByText('1.5%');

    expect(marketName).not.toBeInTheDocument();
    expect(percentChange).not.toBeInTheDocument();
  });
});


