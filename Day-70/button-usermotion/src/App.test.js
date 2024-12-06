import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Mock console.log to verify its output
jest.spyOn(console, "log").mockImplementation(() => {});

describe("App Component", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("renders the button with correct text", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });

  it("calls addTwoNums function with correct arguments on button click", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /add to cart/i });

    // Simulate user click
    await userEvent.click(button);

    // Verify console.log output
    expect(console.log).toHaveBeenCalledWith(30);
  });

  it("scales the button when clicked (Framer Motion animation)", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /add to cart/i });

    // Simulate user click
    await userEvent.click(button);

    // Verify if scale animation is applied (mocking Framer Motion behavior)
    expect(button).toHaveStyle("transform: scale(0.9)");
  });
});
