import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/user-event";
import App from "../pages/characters/index";

describe("Loading Alive rick's", () => {
  it("App shows a title", () => {
    const { getByText } = render(<App />);
    const title = getByText(/Rick & Morty/);
    expect(title).toBeInTheDocument();
  });

  it("shows a list of characters", async () => {
    const { getByRole, getByText } = render(<App />);
    const list = getByRole("navigation");
    await expect(list.children);
  });
});
