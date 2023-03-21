import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useMarketSummaryLogic } from './useMarketSummaryLogic';
import { RootState } from '../../app/store';
import Table from '../Table/Table';

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
          <>
            {(markets.length > 0) && <Table data={markets}/> }
          </>
        )
      }
    </div>
  );
};

export default MarketSummary;
