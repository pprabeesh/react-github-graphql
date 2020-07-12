import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import "@testing-library/jest-dom/extend-expect";
import { GithubRepoSearch } from "./index";
import { QUERY_REPOSITORY_LIST } from "../services";
import { ERROR_MESSAGE, LOADING_MESSAGE } from "./constants";
import wait from "waait";
import { DEFAULT_SEARCH_PARAMS } from "./Search/constants";

test("should render loading state initially", async () => {
  const { getByText } = render(
    <MockedProvider mocks={[]}>
      <GithubRepoSearch />
    </MockedProvider>
  );

  const element = getByText(LOADING_MESSAGE);
  expect(element).toBeInTheDocument();
});

test("should render error on error", async () => {
  const { getByText } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <GithubRepoSearch />
    </MockedProvider>
  );

  await wait(0);

  const element = getByText(ERROR_MESSAGE);
  expect(element).toBeInTheDocument();
});

test("should render data", async () => {
  const mocks = [
    {
      request: {
        query: QUERY_REPOSITORY_LIST,
        variables: {
          queryString: DEFAULT_SEARCH_PARAMS,
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
                  watchers: {
                    totalCount: 4,
                    __typename: "UserConnection",
                  },
                  stargazers: {
                    totalCount: 3,
                    __typename: "StargazerConnection",
                  },
                  __typename: "Repository",
                },
                __typename: "SearchResultItemEdge",
              },
            ],
            __typename: "SearchResultItemConnection",
          },
        },
        error: false,
        called: true,
        loading: false,
      },
    },
  ];
  const { getByText } = render(
    <MockedProvider mocks={mocks} addTypename={true}>
      <GithubRepoSearch />
    </MockedProvider>
  );

  await wait(0);

  const element = getByText("testId");
  expect(element).toBeInTheDocument();
});
