import { render, screen } from "@testing-library/react";
import App from "./App";

test("타이틀에 Todo가 있는가?", () => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  render(<App />);
  const titleEl = screen.getByRole("heading", { name: "Todo" });
  expect(titleEl).toBeInTheDocument();
});
