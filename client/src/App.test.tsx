import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders app header title', async () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  await  waitFor(() => {

    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent(/crypto/i);
  });
});

test('renders app footer title', async () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  await  waitFor(() => {
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(/copyright/i);
  });
});

test('renders app main', async () => {
  render(<App />);
  await  waitFor(() => {
    const footerElement = screen.getByRole('main');
    expect(footerElement).toBeInTheDocument();
  });
});
