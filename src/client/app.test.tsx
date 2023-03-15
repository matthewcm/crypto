import { render, screen } from '@testing-library/react';
import App from './app.js';

test('renders app title', () => {
	render(<App />);
	const titleElement = screen.getByText(/cryptocurrency market data/i);
	expect(titleElement).toBeInTheDocument();
});
