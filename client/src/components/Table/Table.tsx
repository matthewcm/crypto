
import { percentChangeColor } from '../../utils/percentColor';
import { MarketSummary } from '../../types/MarketSummary';
import PaginationRow from './PaginationRow';
import MarketSymbol from '../MarketSymbol/MarketSymbol';
import { usePagination } from './usePagination';

interface TableProps {
  data: MarketSummary[]
}
const Table = ({ data }: TableProps ) => {
 
  const {
    page,
    activePage,
    pageCount,
    pageSizes,
    activePageSize,
    handlePageSize,
    handlePagination,
  } = usePagination(data);

  return (
    <div className="overflow-x-auto">
      <PaginationRow 
        activePage={activePage}
        pageCount={pageCount}
        handlePagination={handlePagination}
        handlePageSize={handlePageSize}
        sizes={pageSizes}
        activePageSize={activePageSize}
      />
      <table className="table w-full">
        <thead>
          <tr>
            <th>Market: Base-Quote</th>
            <th className='hidden sm:table-cell'>Low</th>
            <th className='hidden sm:table-cell'>High</th>
            <th className='hidden lg:table-cell'>24h Base Volume</th>
            <th className='hidden lg:table-cell'>24h Quote Volume</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>

          {page.map((market) => (
            <tr key={market.symbol}>
              <td><MarketSymbol symbol={market.symbol}/></td>
              <td className="hidden sm:table-cell">{((Math.round((market.low) * 100000000) / 100000000).toFixed(8))}</td>
              <td className="hidden sm:table-cell">{((Math.round((market.high) * 100000000) / 100000000).toFixed(8))}</td>
              <td className="hidden lg:table-cell">${((Math.round((market.volume) * 100) / 100).toFixed(2))}</td>
              <td className="hidden lg:table-cell">${((Math.round((market.quoteVolume) * 100) / 100).toFixed(2))}</td>
              <td className={`${percentChangeColor(Number(market.percentChange))}`}>{Number(market.percentChange || 0)}% </td>
            </tr>
          ))}

        </tbody>
      </table>
    
      <PaginationRow 
        activePage={activePage}
        pageCount={pageCount}
        handlePagination={handlePagination}
        handlePageSize={handlePageSize}
        sizes={pageSizes}
        activePageSize={activePageSize}
      />

    </div>
  );
};

export default Table;
