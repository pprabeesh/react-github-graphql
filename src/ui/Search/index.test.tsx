import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Search } from "./index";
import { PLACEHOLDER_TEXT } from "./constants";

test("renders Search", () => {
  const props = {
    searchQuery: "",
    setSearchQuery: jest.fn(),
    getRepos: jest.fn(),
  };

  const { getByPlaceholderText } = render(<Search {...props} />);

  const element = getByPlaceholderText(PLACEHOLDER_TEXT);
  expect(element).toBeInTheDocument();
});
