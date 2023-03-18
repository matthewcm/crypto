import { render, screen } from '@testing-library/react';

import Header from './Header';

it('should render Header component', () => {
  const { container } = render(<Header />);
  expect(container).toBeTruthy();
});

test('renders Header title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Crypto/i);
  expect(titleElement).toBeInTheDocument();
});
