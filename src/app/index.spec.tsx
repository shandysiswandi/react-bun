import { expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import App from "./index";

test("renders Bun + React heading", () => {
  render(<App />);
  expect(screen.getByText(/Bun \+ React/i)).toBeInTheDocument();
});
