import React from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchResultsPage.scss";
import SearchQueryPage from "../SearchQueryPage/SearchQueryPage";
import searchs from "./Searchs";
import NotFoundPage from "../notFound/NotFoundPage";

const SearchResultsPage: React.FC = ({}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const isThereASearch = (query: string | null) => {
    const matchingSearch = searchs.find((search) => search.term === query);
    if (matchingSearch) {
      return <SearchQueryPage matchingSearch={matchingSearch} />;
    }
    return (
      <NotFoundPage />
    );
  };

  return <div>{isThereASearch(query)}</div>;
};

export default SearchResultsPage;