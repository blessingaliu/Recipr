import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MyContext } from "../../context";
import MyMealContainer from "./MyMealContainer";

afterEach(() => {
  cleanup();
});

test("renders the Meals container in the program", () => {
  render(
    <MyContext.Provider value={{ userrecipes: [] }}>
      <MyMealContainer />
    </MyContext.Provider>
  );
});

// render(<App />);
// const linkElement = screen.getByText(/Recipr/i);
// expect(linkElement).toBeInTheDocument();

// test("Shows Meal Cards", () => {
//   const meals = [
//     {
//       idMeal: "52768",
//       strMeal: "Apple Frangipan Tart",
//       strMealThumb:
//         "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
//     },
//   ];
// });
