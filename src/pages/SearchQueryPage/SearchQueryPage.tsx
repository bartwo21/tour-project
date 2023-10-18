import React from 'react';

type MatchingSearch = {
  term: string;
  title: string;
  desc: string;
  img: string;
};

const SearchQueryPage: React.FC<{ matchingSearch: MatchingSearch }> = ({ matchingSearch }) => {
  return (
    <div>
      <h2>{matchingSearch.title}</h2>
      <p>{matchingSearch.desc}</p>
      <img src={matchingSearch.img} alt={matchingSearch.title} />
    </div>
  );
};

export default SearchQueryPage;
