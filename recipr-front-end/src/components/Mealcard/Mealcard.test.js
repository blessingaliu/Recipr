import { render, screen, cleanup } from "@testing-library/react";

import Mealcard from "../Mealcard/Mealcard";

test("recipe card returned after searching for a dish", () => {
  render(<Mealcard />)
  expect(screen.getByText('See recipe')).toBeInTheDocument();
});
