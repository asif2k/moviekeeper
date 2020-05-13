import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders MovieKeeper', () => {
  const { getByText } = render(<Navbar />);  
  expect(getByText(/MovieKeeper/i)).toBeInTheDocument();
});

test('renders My Favorites', () => {
    const { getByText } = render(<Navbar />);    
    expect(getByText(/My Favorites/i)).toBeInTheDocument();
});


test('renders Watch List', () => {
    const { getByText } = render(<Navbar />);    
    expect(getByText(/Watch List/i)).toBeInTheDocument();
});