import { useState } from 'react';
import { MarketSummary } from '../../types/MarketSummary';

export const useHeaderSort = (data: MarketSummary[]) => {
    
  const [sortedData, setSortedData] = useState(data);

  const [lastSortField, setLastSortField] = useState<keyof MarketSummary>('symbol');
  const [sortDescending, setDescending] = useState(true);

  const handleSortOrder = (
    sortField: keyof MarketSummary,
    descending: boolean,
  ) => {

    return [...data].sort((a, b) => {
      const magnitude = descending ? 1 : -1;
      const first = a[sortField] || '0' ;
      const second = b[sortField] || '0';
      const isNum = /^-?\d+(?:\.\d+)?$/;

      if (isNum.test(first) && isNum.test(second)
      ) return magnitude * ( Number(first ) - Number(second ));
      return magnitude * (first.localeCompare(
        second,
        undefined,
        { 
          numeric: true,
          sensitivity: 'base',
        }));
    });
  };

  const handleSort = (sortField : keyof MarketSummary) => {
    const isNowDescending = (sortField === lastSortField)
      ? !sortDescending 
      : false;

    setDescending(isNowDescending);
    setLastSortField(sortField);
    setSortedData(handleSortOrder(sortField, isNowDescending));
  };
  return {
    lastSortField,
    sortDescending,
    sortedData,
    handleSort,
  };
};
