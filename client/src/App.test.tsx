import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header title', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(/crypto/i);
});
test('renders app footer title', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toHaveTextContent(/copyright/i);
});

test('renders app main', () => {
  render(<App />);
  const footerElement = screen.getByRole('main');
  expect(footerElement).toBeInTheDocument();
});
