import { render, screen } from '@testing-library/react';
import App from './app';

test('renders app header title', () => {
	render(<App />);
	const headerElement = screen.getByRole('heading');
	expect(headerElement).toBeInTheDocument();
	expect(headerElement).toHaveTextContent(/cryptocurrency market data/i);
});
test('renders app footer title', () => {
	render(<App />);
	const footerElement = screen.getByText('footer');
	expect(footerElement).toBeInTheDocument();
});
