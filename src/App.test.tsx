import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { QUERY_REPOSITORY_LIST } from "./services";

const mocks = [
  {
    request: {
      query: QUERY_REPOSITORY_LIST,
      variables: {
        queryString: "",
      },
    },
    result: {
      data: {
        search: {
          repos: [
            {
              repo: {
                id: "testId",
                name: "testName",
                stargazers: {
                  totalCount: 3,
                },
              },
            },
          ],
        },
      },
    },
  },
];

test("renders App", () => {
  act(() => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const headerElement = getByText(/Github Search/i);
    expect(headerElement).toBeInTheDocument();
  });
});
