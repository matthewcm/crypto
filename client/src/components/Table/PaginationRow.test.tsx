import { render, screen, waitFor } from '@testing-library/react';

import PaginationRow, { PaginationRowProps } from './PaginationRow';

describe('usePagination hook', () => {

  it('should render pagination row', () => {

    const props: PaginationRowProps = {
      sizes: [10, 20, 30, 40, 50],
      pageCount: 10,
      activePage: 1,
      activePageSize: 10,
      handlePageSize: jest.fn(),
      handlePagination: jest.fn(),
    };
    render(<PaginationRow 
      {...props}
    />);

    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
  });
  
  it('should handle previous page', async () => {

    const props: PaginationRowProps = {
      sizes: [10, 20, 30, 40, 50],
      pageCount: 10,
      activePage: 1,
      activePageSize: 10,
      handlePageSize: jest.fn(),
      handlePagination: jest.fn(),
    };
    render(<PaginationRow 
      {...props}
    />);

    const prevPageButton = screen.getByRole('button', { name: 'Previous' });
    await waitFor(() => {
      prevPageButton.click();
      expect(props.handlePagination).toHaveBeenCalled();
    });
  });
  it('should handle next page', async () => {

    const props: PaginationRowProps = {
      sizes: [10, 20, 30, 40, 50],
      pageCount: 10,
      activePage: 1,
      activePageSize: 10,
      handlePageSize: jest.fn(),
      handlePagination: jest.fn(),
    };
    render(<PaginationRow 
      {...props}
    />);

    const nextPageButton = screen.getByRole('button', { name: 'Next' });
    await waitFor(() => {
      nextPageButton.click();
      expect(props.handlePagination).toHaveBeenCalled();
    });
  });
  it('should handle page size', async () => {

    const props: PaginationRowProps = {
      sizes: [10, 20, 30, 40, 50],
      pageCount: 10,
      activePage: 1,
      activePageSize: 10,
      handlePageSize: jest.fn(),
      handlePagination: jest.fn(),
    };
    render(<PaginationRow 
      {...props}
    />);

    const pageSizeButton = screen.getByRole('button', { name: 'Page Size 20' });
    await waitFor(() => {
      pageSizeButton.click();
      expect(props.handlePageSize).toHaveBeenCalled();
    });
  });
});
