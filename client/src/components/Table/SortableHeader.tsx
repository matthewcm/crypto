import classnames from 'classnames';
import { ReactNode } from 'react';
import { type MarketSummary } from '../../types/MarketSummary';

export interface SortableHeaderProps {
  className?: string,
  children: ReactNode,
  handleSort: (sortField: keyof MarketSummary) => void,
  sortField: keyof MarketSummary,
  lastSortField: string,
  sortDescending: boolean,
}
const SortableHeader = (
  {
    handleSort,
    sortField,
    lastSortField,
    sortDescending,
    className,
    children }: SortableHeaderProps) => (

  <th 
    onClick={() => handleSort(sortField)}
    className={className}
  >
    {children}
    <span className={classnames('ml-2', {
      'hidden':lastSortField !== sortField,
      'inline': lastSortField === sortField, 
      'text-red-500': !sortDescending,
      'text-green-500': sortDescending,
    })} >
      {!sortDescending ? '⇓' : '⇑'}
    </span>
  </th>
);

export default SortableHeader;
