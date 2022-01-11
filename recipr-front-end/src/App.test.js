import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

afterEach(() => {
  cleanup();
});

test('renders Recipr', () => {

  render(<App />);
  // const linkElement = screen.getByText(/Recipr/i);
  // expect(linkElement).toBeInTheDocument();
 
});
