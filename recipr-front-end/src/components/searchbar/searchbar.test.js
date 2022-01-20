import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MyContext } from "../../context";
import ShowSearchbar from "../searchbar/searchbar";

afterEach(() => {
  cleanup();
});

test("renders ShowSearchbar for the the page", () => {
  render(
    <MyContext.Provider value={{ meals: [] }}>
      <ShowSearchbar />
    </MyContext.Provider>
  );
});

// test("Shows Searchbar", () => {
//   render(<App />);
//   const setMeals = screen.getByPlaceholderText(/search for recipe/i);
//   expect(setMeals).toBeInTheDocument();
// });

// render(<ShowSearchbar />);
// const linkElement = screen.getByText(/Recipr/i);
// expect(linkElement).toBeInTheDocument();
