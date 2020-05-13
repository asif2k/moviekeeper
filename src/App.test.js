import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app-logo test id', () => {
  const { getByRole } = render(<App />);  
  expect(getByRole('app-logo')).toBeInTheDocument();
});
