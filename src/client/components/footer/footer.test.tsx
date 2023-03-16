import { render, screen } from '@testing-library/react';

import Footer from './footer';

it('should render Footer component', () => {
	const { container } = render(<Footer />);
	expect(container).toBeTruthy();
});

test('renders Footer title', () => {
	render(<Footer />);
	const titleElement = screen.getByText(/copyright/i);
	expect(titleElement).toBeInTheDocument();
});
