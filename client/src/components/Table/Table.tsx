import { percentChangeColor } from '../../utils/percentColor';
import { MarketSummary } from '../../types/MarketSummary';
import PaginationRow from './PaginationRow';
import MarketSymbol from '../MarketSymbol/MarketSymbol';
import { usePagination } from './usePagination';
import SortableHeader from './SortableHeader';
import { useHeaderSort } from './useHeaderSort';
interface TableProps {
  data: MarketSummary[]
}
const Table = ({ data }: TableProps ) => {
  const {
    lastSortField,
    sortDescending,
    sortedData,
    handleSort,
  } = useHeaderSort(data);

  const {
    page,
    activePage,
    pageCount,
    pageSizes,
    activePageSize,
    handlePageSize,
    handlePagination,
  } = usePagination(sortedData);

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
            <SortableHeader
              sortField={'symbol'} 
              lastSortField={lastSortField}
              sortDescending={sortDescending}
              handleSort={handleSort}
            >
               Market: Base-Quote 
            </SortableHeader>
            <SortableHeader 
              sortField={'low'}
              className='hidden sm:table-cell'
              lastSortField={lastSortField}
              sortDescending={sortDescending}
              handleSort={handleSort}
            >
              Low
            </SortableHeader>
            
            <SortableHeader 
              sortField={'high'}
              className='hidden sm:table-cell'
              lastSortField={lastSortField}
              sortDescending={sortDescending}
              handleSort={handleSort}
            >
              High
            </SortableHeader>
            <SortableHeader 
              sortField={'volume'}
              className='hidden lg:table-cell'
              lastSortField={lastSortField}
              sortDescending={sortDescending}
              handleSort={handleSort}
            >
              24h Base Volume
            </SortableHeader> 
            <SortableHeader 
              sortField={'quoteVolume'}
              className='hidden lg:table-cell'
              lastSortField={lastSortField}
              sortDescending={sortDescending}
              handleSort={handleSort}
            >
              24h Quote Volume
            </SortableHeader>
            <SortableHeader 
              sortField={'percentChange'}
              lastSortField={lastSortField}
              sortDescending={sortDescending}
              handleSort={handleSort}
            >
              24h Change
            </SortableHeader>
          </tr>
        </thead>
        <tbody>

          {page.map((market) => (
            <tr key={market.symbol}>
              <td><MarketSymbol symbol={market.symbol}/></td>
              <td className="hidden sm:table-cell">{(Math.round(Number(market.low) * 100000000) / 100000000).toFixed(8)}</td>
              <td className="hidden sm:table-cell">{(Math.round(Number(market.high) * 100000000) / 100000000).toFixed(8)}</td>
              <td className="hidden lg:table-cell">${(Math.round(Number(market.volume) * 100) / 100).toFixed(2)}</td>
              <td className="hidden lg:table-cell">${(Math.round(Number(market.quoteVolume) * 100) / 100).toFixed(2)}</td>
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
