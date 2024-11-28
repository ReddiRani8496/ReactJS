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
});
