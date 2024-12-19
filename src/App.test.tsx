import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app header", () => {
  render(<App />);
  const headerElement = screen.getByText(/日常生活アプリ/i);
  expect(headerElement).toBeInTheDocument();
});
