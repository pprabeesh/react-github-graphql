import gql from "graphql-tag";

export const QUERY_REPOSITORY_LIST = gql`
  query RepositoryList($queryString: String!) {
    search(type: REPOSITORY, query: $queryString, first: 100) {
      repos: edges {
        repo: node {
          ... on Repository {
            id
            name
            watchers {
              totalCount
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;
