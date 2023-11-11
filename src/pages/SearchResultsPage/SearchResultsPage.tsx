import React from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchResultsPage.scss";
import SearchQueryPage from "../SearchQueryPage/SearchQueryPage";
import { travelCards } from "../home/cardsArray";
import NotFoundPage from "../notFound/NotFoundPage";

const SearchResultsPage: React.FC = ({}) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const isThereASearch = (query: string | null) => {
    const matchingSearch = travelCards.find((travelCards) => travelCards.url === query);
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
