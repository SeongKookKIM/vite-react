import { render, screen } from "@testing-library/react";
import List from "./List";

test("검색 기능 테스트", () => {
  render(<List />);
  const searchEl = screen.getByPlaceholderText(/검색어를 입력해주세요/);
  expect(searchEl).toBeInTheDocument();
});
