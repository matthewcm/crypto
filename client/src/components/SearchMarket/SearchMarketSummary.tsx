import { useSelector } from 'react-redux';
import MarketSymbol from '../MarketSymbol/MarketSymbol';
import { useSearchMarketLogic } from './useSearchMarketLogic';
import { RootState } from '../../app/store';
import { percentChangeColor } from '../../utils/percentColor';
import { SelectOption } from '../../types/SelectOption';
import Search from '../Search/Search';
import Stat from '../Stat/Stat';
 
const SearchMarketSummary = () => {
  const marketSummaryList = useSelector((state: RootState) => state.marketSummaryList);

  const options: SelectOption[] = marketSummaryList.map(({ symbol })=> {
    return {
      label:symbol,
      value:symbol,
    };
  });
  const { market, handleChange } = useSearchMarketLogic();

  return (
    <>
      <Search options={options} handleChange={handleChange}/>

      <h2 className='flex justify-center font-bold text-xl m-auto'> 
        <MarketSymbol symbol={market.symbol} />
      </h2>
      <div className="stats stats-vertical">
        <div className="stat">
          <div className="stat-value text-xl text-base-content text-bold">24h Change</div>
          {
            <div className={`stat-value text-2xl ${percentChangeColor(Number(market.percentChange))}`}>
              {market.percentChange 
                ?  `${market.percentChange}%`
                : '-'
              }
            </div>
          }
        </div>
        <Stat label="Low" value={market.low || '-' } />
        <Stat label="High" value={market.high || '-'} />
        <Stat label="Quote Volume" value={market.quoteVolume || '-'} />
        <Stat label="Volume" value={market.volume || '-'} />
  
      </div>
    </>
  );
};

export default SearchMarketSummary;
