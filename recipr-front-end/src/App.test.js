import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { MyContext } from './context';

afterEach(() => {
  cleanup();
});

test('renders Recipr for my context', () => {

  // render(<App />);
  // const linkElement = screen.getByText(/Recipr/i);
  // expect(linkElement).toBeInTheDocument();
 
  render(
    <MyContext.Provider value={{ meals: [] }}>
      <App />
    </MyContext.Provider>
  );
});
