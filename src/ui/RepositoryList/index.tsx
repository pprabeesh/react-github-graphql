import * as React from "react";
import { RepositoryListQuery } from "../../generated/graphql";
import "./styles.css";
import {
  COLUMN_ID_HEADER,
  COLUMN_NAME_HEADER,
  COLUMN_STARS_HEADER,
} from "./constants";

interface Props {
  resultList: RepositoryListQuery;
}

export const RepositoryList = ({ resultList }: Props) => {
  const { repos } = resultList.search;
  return (
    <div className="results-wrapper">
      <div className="row">
        <div className="column header col1">{COLUMN_ID_HEADER}</div>
        <div className="column header col2">{COLUMN_NAME_HEADER}</div>
        <div className="column header col3">{COLUMN_STARS_HEADER}</div>
      </div>
      {repos?.map((repositoryResult) => {
        const repository = repositoryResult?.repo;
        if (repository?.__typename === "Repository") {
          const { id, name, stargazers } = repository;
          return (
            <div className="row" key={`Repo-${id}`}>
              <div className="column col1"> {id} </div>
              <div className="column col2"> {name} </div>
              <div className="column col3"> {stargazers.totalCount} </div>
            </div>
          );
        }
      })}
    </div>
  );
};
