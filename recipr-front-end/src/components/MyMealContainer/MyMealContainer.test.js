import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MyContext } from "../../context";
import MyMealContainer from "./MyMealContainer";

afterEach(() => {
  cleanup();
});

test("renders the Meals container in the program", () => {
  render(
    <MyContext.Provider value={{ userrecipes: [] ,}}>
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

// test("Shows Meal Cards", () => {
//   const user = [
//     { name: 'Juliet',
//       email: 'Juliet@gmail.com',
//       __v: 11,
//       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M…QwNH0.DtYVM_BCYiUe9tp_GymNsu0MXcw6-DuyWNg1pg-GKko', 
//       userrecipe: Array(12) 
//      },
//   ];
//     render(<MyMealContainer />)  ;
//     const user1 = user.userrecipes
//    expect(screen.getByText('user1')).toBeInTheDocument();
// }