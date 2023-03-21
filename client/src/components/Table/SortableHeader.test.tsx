import { render, screen, waitFor } from '@testing-library/react';

import SortableHeader, { SortableHeaderProps } from './SortableHeader';

describe('Sortable Header', () => {
  it('should render sort descending', async () => {

    const props: SortableHeaderProps = {
      handleSort: jest.fn(),
      sortField: 'symbol',
      lastSortField: 'symbol',
      sortDescending: false,
      children:'symbol', 
    };

    render(
      <table> 
        <thead>
          <tr>
            <SortableHeader
              {...props}
            />
          </tr>
        </thead>
      </table>,
    );

    await waitFor(() => {
      expect(screen.getByText(/⇓/)).toBeInTheDocument();
    });
  }); 
  
  it('should render sort ascending', async () => {

    const props: SortableHeaderProps = {
      handleSort: jest.fn(),
      sortField: 'symbol',
      lastSortField: 'symbol',
      sortDescending: true,
      children:'symbol', 
    };
    render(
      <table> 
        <thead>
          <tr>
            <SortableHeader
              {...props}
            />
          </tr>
        </thead>
      </table>,
    );

    await waitFor(() => {
      expect(screen.getByText(/⇑/)).toBeInTheDocument();
    });
  });
  it('should handle sort', async () => {

    const props: SortableHeaderProps = {
      handleSort: jest.fn(),
      sortField: 'symbol',
      lastSortField: 'symbol',
      sortDescending: true,
      children:'symbol', 
    };

    render(
      <table> 
        <thead>
          <tr>
            <SortableHeader
              {...props}
            />
          </tr>
        </thead>
      </table>,
    );

    await waitFor(() => {
      screen.getByRole('columnheader').click();
      expect(props.handleSort).toHaveBeenCalledWith('symbol');
    });
  });
  
});
