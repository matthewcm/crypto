import { useCallback, useEffect, useState } from 'react';
import { MarketSummary } from '../../types/MarketSummary';

export const usePagination = (data: MarketSummary[]) => {

  const pageSizes = [20, 50, 100];

  const [page, setPage] = useState<MarketSummary[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [activePageSize, setActivePageSize] = useState(pageSizes[0]);

  const getNewPageSlice = useCallback((pageNum:number, pageSize: number) => {
    return data.slice(
      (pageNum - 1) * pageSize,
      pageNum * pageSize,
    );
  }, [data]);

  const getNewPageCount = useCallback((pageSize: number) => {
    return Math.ceil(data.length / pageSize);
  }, [data]);

  const handlePagination = useCallback((pageNum: number) => {
    setPage(getNewPageSlice(pageNum, activePageSize));
    setPageCount(getNewPageCount(activePageSize));
    setActivePage(pageNum);
  }, [activePageSize, getNewPageSlice, getNewPageCount]);

  const handlePageSize = useCallback((pageSize: number) => {
    setPage(getNewPageSlice(activePage, pageSize));
    setPageCount(getNewPageCount(pageSize));
    setActivePage(activePage);
    setActivePageSize(pageSize);
  }, [activePage, getNewPageSlice, getNewPageCount]);

  useEffect(() => {
    handlePagination(1);
  }, [handlePagination]);


  return {
    page,
    pageCount,
    activePage,
    activePageSize,
    pageSizes,
    handlePagination,
    handlePageSize,
  };
};
