import { render, screen, cleanup} from '@testing-library/react';
import Mealcard from "../Mealcard/Mealcard";
import MealModal from "../MealModal/MealModal"

afterEach(() => {
    cleanup();
  });

test('______', () => {
    render(<MealModal />);
    expect(screen.getByText('Show Recipe')).toBeInTheDocument();
});