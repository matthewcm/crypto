
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
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>

          {page.map((market) => (
            <tr key={market.symbol}>
              <td>{market.symbol}</td>
              <td className={`${percentChangeColor(Number(market.percentChange))}`}>{Number(market.percentChange)}% </td>
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
