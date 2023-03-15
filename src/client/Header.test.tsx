import React from 'react'
import {render, cleanup, screen} from '@testing-library/react'

import Header from './components/Header'

it('should render Header component', () => {
    const {container} = render(<Header/>)
    expect(container).toBeTruthy();
});

test('renders Header title', () => {
  render(<Header/>);
  const titleElement = screen.getByText(/Cryptocurrency Market Data/i);
  expect(titleElement).toBeInTheDocument();
})