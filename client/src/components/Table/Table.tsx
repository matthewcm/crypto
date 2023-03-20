
import { percentChangeColor } from '../../utils/percentColor';
import { MarketSummary } from '../../types/MarketSummary';
import PaginationRow from './PaginationRow';
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
            <th>Market</th>
            <th className='hidden sm:table-cell'>Low</th>
            <th className='hidden sm:table-cell'>High</th>
            <th className='hidden lg:table-cell'>Quote Volume</th>
            <th className='hidden lg:table-cell'>Volume</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>

          {page.map((market) => (
            <tr key={market.symbol}>
              <td>{market.symbol}</td>
              <td className="hidden sm:table-cell">{market.low}</td>
              <td className="hidden sm:table-cell">{market.high}</td>
              <td className="hidden lg:table-cell">{market.quoteVolume}</td>
              <td className="hidden lg:table-cell">{market.volume}</td>
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
