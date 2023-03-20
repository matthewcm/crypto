import classnames from 'classnames';

export interface PaginationRowProps {
  sizes: number[];
  pageCount: number;
  activePage: number;
  activePageSize: number;
  handlePagination: (pageNum: number) => void;
  handlePageSize: (pageSize: number) => void;
}
const PaginationRow = ({
  sizes,
  activePage,
  pageCount,
  activePageSize,
  handlePagination,
  handlePageSize,
}: PaginationRowProps) => (
  <div className="flex justify-around mb-5">
    <div className="btn-group" aria-label='Table Size'>
      {sizes.map((size) => (

        <button
          key={`page-size-${size}`}
          aria-label={`Page Size ${size}`}
          onClick={() => handlePageSize(size)}
          className={
            classnames('btn btn-xs', {
              'btn-active': activePageSize === size,
            })}
        >
          {size}
        </button>
      ))}
    </div>
      
    <div className="btn-group" aria-label='Table Pagination Navigation'>
      <button 
        className="btn btn-xs"
        aria-label='Previous'
        onClick={() => handlePagination(Math.max(activePage - 1, 1))}
      >
          «
      </button>
      <button className="btn btn-xs">{activePage} of {pageCount}</button>
      <button 
        className="btn btn-xs"
        aria-label='Next'
        onClick={() => handlePagination(Math.min(activePage + 1, pageCount))}
      >
          »
      </button>
    </div>
  </div>
);

export default PaginationRow;
