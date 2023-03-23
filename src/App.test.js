import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders create todo link", () => {
  render(<App />);
  const linkElement = screen.getByText(/create todo/i);
  expect(linkElement).toBeInTheDocument();
});
