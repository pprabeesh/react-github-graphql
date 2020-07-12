import * as React from "react";
import "./styles.css";

import { DEFAULT_SEARCH_PARAMS, PLACEHOLDER_TEXT } from "./constants";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  getRepos: (options?: any) => void;
}

export const Search = ({ searchQuery, setSearchQuery, getRepos }: Props) => (
  <div className="Search">
    <input
      type="text"
      placeholder={PLACEHOLDER_TEXT}
      value={searchQuery}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchQuery(e.target.value)
      }
    />
    <button
      onClick={() =>
        getRepos({ queryString: `${searchQuery} ${DEFAULT_SEARCH_PARAMS}` })
      }
    >
      Search
    </button>
  </div>
);
