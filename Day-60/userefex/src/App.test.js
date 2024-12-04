import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("it should focus input when button is clicked", () => {
  render(<App />);

  const button = screen.getByText(/focus input/i);
  fireEvent.click(button);

  const input = screen.getByRole("textbox");
  expect(input).toHaveFocus();
});
