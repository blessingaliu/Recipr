import { render, screen, cleanup} from '@testing-library/react';

import ShowNav from '../Navbar/navbar'

afterEach(() => {
    cleanup();
  });

test('Shows Navbar', () => {
  render(<ShowNav />);
//   const linkElement = screen.getByText('signup');
//   expect(linkElement).toBeInTheDocument();
  expect(screen.getByText('Signup')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();

});