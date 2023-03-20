
import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import { useSearchMarketLogic } from './useSearchMarketLogic';
import { MarketSummary as MarketSummaryType } from '../../types/MarketSummary';
import { WithProviders } from '../../utils/testUtils';
import SearchMarketSummary from './SearchMarketSummary';
import { openMenu, select } from 'react-select-event';

jest.mock('./useSearchMarketLogic');

const mockedUseSearchMarketLogic = useSearchMarketLogic as jest.MockedFunction<typeof useSearchMarketLogic>;

describe('SearchMarketSummary', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render the market summary modal with the provided data', () => {

    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
    });
    const sampleMarket: MarketSummaryType = {
      symbol: 'BTC-ETH',
      high: '0.032',
      low: '0.031',
      volume: '1000',
      quoteVolume: '2000',
      percentChange: '1.5',
      updatedAt: '2023-03-15T10:00:00Z',
    };

    mockedUseSearchMarketLogic.mockReturnValue({
      market: sampleMarket,
      handleChange: jest.fn(),
    });

    render(
      <WithProviders>
        <SearchMarketSummary />
      </WithProviders>,
    );

    const [currency, baseCurrency ] = sampleMarket.symbol.split('-');
    expect(screen.getByText(currency)).toBeInTheDocument();
    expect(screen.getByText(baseCurrency)).toBeInTheDocument();
  }); 
  it('should render the empty Search summary modal', () => {

    const sampleMarket = {} as MarketSummaryType;

    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
    });

    mockedUseSearchMarketLogic.mockReturnValue({
      market: sampleMarket,
      handleChange: jest.fn(),
    });

    render(
      <WithProviders>
        <SearchMarketSummary />
      </WithProviders>,
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/-/i);
  }); 
  it('should handle search changes', async () => {

    const sampleMarket: MarketSummaryType = {
      symbol: 'BTC-ETH',
      high: '0.032',
      low: '0.031',
      volume: '1000',
      quoteVolume: '2000',
      percentChange: '1.5',
      updatedAt: '2023-03-15T10:00:00Z',
    };

    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
    });
    const handleChange = jest.fn();

    mockedUseSearchMarketLogic.mockReturnValue({
      market: sampleMarket,
      handleChange,
    });

    render(
      <WithProviders preloadedState={{
        marketSummaryList: [sampleMarket],
      }}>
        <SearchMarketSummary />
      </WithProviders>,
    );

    const search = screen.getByRole('combobox');

    openMenu(search);
    await select(search, sampleMarket.symbol);

    expect(search).toBeInTheDocument();
    expect(handleChange).toHaveBeenCalled();
 
  });

});

