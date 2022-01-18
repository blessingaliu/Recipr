import { render, screen, cleanup } from "@testing-library/react";
import ShowSearchbar from "../searchbar/searchbar";
import MyMealContainer from "./MyMealContainer";

afterEach(() => {
  cleanup();
});

test("Shows Meal Cards", () => {
  const meals = [
    {
      idMeal: "52768",
      strMeal: "Apple Frangipan Tart",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    },
  ];
}

//   user(name, email, password, token, favorites, userrecipe);

//   console.log(user.userrecipe);

//   render(<MyMealContainer meals={user.userrecipe} />);

//   expect(screen.getByText("Apple Frangipan Tart")).toBeInTheDocument();
// });

// const user = {
//   email: "user2@testing.com",
//   favorites: ["52893"],
//   name: "user2",
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU1YTExNGUyYjI3M2ZjYTA0MzUzYjciLCJpYXQiOjE2NDI1MDg4NTMsImV4cCI6MTY0MjU0NDg1M30.ZmyAHVuQD96wfw6Y06ZGC8Aqhsoghjf2vzeUZONWmOY",
//   userrecipe: [
//     recipeName: "meat pizza",
//     recipeIngredients: "tomato",
//     recipeIngredients: "tomato",
//     recipeInstructions: "cook",
//   ],
// }
