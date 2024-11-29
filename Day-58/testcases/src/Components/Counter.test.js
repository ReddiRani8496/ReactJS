import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  test("test on increment count", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(screen.getByText(/count:/i)).toHaveTextContent("Count: 1");
  });
  test("test on decrement count", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByText(/count:/i)).toHaveTextContent("Count: -1");
  });
  test("test on reset", () => {
    render(<Counter />);
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    expect(screen.getByText(/count:/i)).toHaveTextContent("Count: 0");
  });
});
