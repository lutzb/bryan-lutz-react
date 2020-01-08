import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Temporarily under construction!/i);
  expect(linkElement).toBeInTheDocument();
});
