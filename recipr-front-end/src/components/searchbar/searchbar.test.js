import { render, screen, cleanup } from "@testing-library/react";
import ShowSearchbar from "../searchbar/searchbar";
import App from "../../App";

afterEach(() => {
  cleanup();
});

test("Shows Searchbar", () => {
  render(<App />);
  const setMeals = screen.getByPlaceholderText(/search for recipe/i);
  expect(setMeals).toBeInTheDocument();
});
