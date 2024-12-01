import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList Component", () => {
  test("renders user list", () => {
    render(<UserList />);

    expect(screen.getByText("Rahul")).toBeInTheDocument();
    expect(screen.getByText("Leela")).toBeInTheDocument();
    expect(screen.getByText("Rama")).toBeInTheDocument();
  });

  test("finds user by name when button is clicked", () => {
    render(<UserList />);

    fireEvent.click(screen.getByText("Find Leela"));

    expect(screen.getByText("Found User: Leela")).toBeInTheDocument();
  });

  test("displays 'No user found' message initially", () => {
    render(<UserList />);

    expect(screen.getByText("No user found")).toBeInTheDocument();
  });
});
