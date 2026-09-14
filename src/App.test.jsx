import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the home route loading state', () => {
  render(<App />);

  expect(document.getElementById('loading')).toBeInTheDocument();
});
