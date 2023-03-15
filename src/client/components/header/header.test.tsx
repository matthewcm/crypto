import { render, screen } from '@testing-library/react';

import Header from './header';

it('should render Header component', () => {
	const { container } = render(<Header />);
	expect(container).toBeTruthy();
});

test('renders Header title', () => {
	render(<Header />);
	const titleElement = screen.getByText(/cryptocurrency market data/i);
	expect(titleElement).toBeInTheDocument();
});
