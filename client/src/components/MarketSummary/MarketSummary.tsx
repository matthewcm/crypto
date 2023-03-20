import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { type MarketSummary as MarketSummaryType } from '../../types/MarketSummary';
import { useMarketSummaryLogic } from './useMarketSummaryLogic';
import { RootState } from '../../app/store';
import { percentChangeColor } from '../../utils/percentColor';

const MarketSummary = () => {
  const {
    isAuthenticated,
  } = useAuth0();

  useMarketSummaryLogic();

  const markets = useSelector((state: RootState) => state.marketSummaryList);

  return (
    <div>
      <h1 className='mb-5 text-lg font-bold'> MARKETS </h1>

      { !isAuthenticated ? (
        <p> Please log in to view market summary data</p>)
        : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Market</th>
                  <th>24h Change</th>
                </tr>
              </thead>
              <tbody>

                {markets.map((market:MarketSummaryType) => (
                  <tr key={market.symbol}>
                    <td>{market.symbol}</td>
                    <td className={`${percentChangeColor(Number(market.percentChange))}`}>{Number(market.percentChange)}% </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        
        )}
    </div>
  );
};

export default MarketSummary;
