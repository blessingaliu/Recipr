import { render, screen, cleanup} from '@testing-library/react';
import ShowSearchbar from '../searchbar/searchbar';

import MealContainer from './MealContainer'

afterEach(() => {
    cleanup();
  });

test('Shows Meal Cards', () => {
  const meals = [{ "idMeal": "52768",
  "strMeal": "Apple Frangipan Tart",
  "strMealThumb": "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg" }];
  
  render(<MealContainer meals={ meals } />);

  expect(screen.getByText('Apple Frangipan Tart')).toBeInTheDocument();
  

});