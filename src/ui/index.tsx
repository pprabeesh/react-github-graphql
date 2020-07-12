import React, { useState } from "react";
import { useRepositoryListQuery } from "../generated/graphql";
import { RepositoryList } from "./RepositoryList";
import { Search } from "./Search";
import { DEFAULT_SEARCH_PARAMS } from "./Search/constants";
import { ERROR_MESSAGE, LOADING_MESSAGE } from "./constants";

export const GithubRepoSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { data, called, error, loading, refetch } = useRepositoryListQuery({
    variables: { queryString: `${DEFAULT_SEARCH_PARAMS}` },
  });

  return (
    <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getRepos={refetch}
      />
      {loading && called && <div>{LOADING_MESSAGE}</div>}
      {error && called && <div>{ERROR_MESSAGE}</div>}
      {data && !loading && <RepositoryList resultList={data} />}
    </>
  );
};
