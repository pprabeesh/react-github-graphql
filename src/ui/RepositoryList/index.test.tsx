import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RepositoryList } from "./index";
import { COLUMN_ID_HEADER } from "./constants";

test("renders RepositoryList", () => {
  const data = {
    search: {
      repos: [
        {
          repo: {
            id: "testId",
            name: "testName",
            watchers: {
              totalCount: 4,
            },
            stargazers: {
              totalCount: 3,
            },
          },
        },
      ],
    },
  };

  const { getByText } = render(<RepositoryList resultList={data} />);

  const element = getByText(COLUMN_ID_HEADER);
  expect(element).toBeInTheDocument();
});
