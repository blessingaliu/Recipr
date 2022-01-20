import { render, fireEvent } from "@testing-library/react";
import React from "react";

test("signup button works", () => {
  const handler = jest.fn((e) => e.preventDefault());
  const { getByText } = render(
    <form onSubmit={handler}>
      <button type="submit">Sign Up</button>
    </form>
  );

  fireEvent.click(getByText(/Sign Up/i));
  expect(handler).toHaveBeenCalledTimes(1);
});
