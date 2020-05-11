import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Haker news link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Haker news/i);
  expect(linkElement).toBeInTheDocument();
});
