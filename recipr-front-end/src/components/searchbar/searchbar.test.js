import { render, screen, cleanup} from '@testing-library/react';

import ShowSearchbar from '../searchbar/searchbar'

afterEach(() => {
    cleanup();
  });

test('Shows Searchbar', () => {
  render(<ShowSearchbar />);
  expect(screen.queryByPlaceholderText('search for recipe')).toBeInTheDocument();
  expect(screen.getByText('submit')).toBeInTheDocument();
});
