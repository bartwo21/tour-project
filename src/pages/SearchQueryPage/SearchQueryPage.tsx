import { AiOutlineHeart } from 'react-icons/ai';
import React from 'react';
import "./SearchQueryPage.scss";

type SearchQueryPageProps = {
  matchingSearch: MatchingSearch;
}

type MatchingSearch = {
  img: string;
  map: string;
  title: string;
  url: string;
  description: string;
  groupSize: string;
  stars: number;
  oldPrice: string;
  price: string;
  button: string;
};

const SearchQueryPage = ({ matchingSearch }: SearchQueryPageProps) => {
  return (
    <div className='container'>
      <div className="content">
        <div className="left-img">
          <img src={matchingSearch.img} alt={matchingSearch.title} />
        </div>
        <div className="bottom">
          <div className="card-infos">
            <h2>{matchingSearch.title}</h2>
            <p className='days'>8 days |  11 days with London extension</p>
            <div className="details">
              <div className="group-size">
                <p className='size-title'>Group Size</p>
                <p className='size-value'>{matchingSearch.groupSize}</p>
              </div>
              <div className="reviews">
                <p className='review-title'>Reviews</p>
                <div className="stars">{matchingSearch.stars} stars</div>
              </div>
              <div className="button">
                <button>Reservation</button>
              </div>
              <span className="heart-button"><AiOutlineHeart size={40} className="heart"/></span>
            </div>
          </div>
          <div className="bottom-imgs">
            <div className="bottom-img">
              <img src={matchingSearch.img} alt={matchingSearch.title} />
            </div>
            <div className="bottom-img">
              <img src={matchingSearch.img} alt={matchingSearch.title} />
            </div>
            <div className="bottom-img">
              <img src={matchingSearch.img} alt={matchingSearch.title} />
            </div>
          </div>
        </div>
      <p className='desc'>{matchingSearch.description}</p>
      </div>
    </div>
  );
};

export default SearchQueryPage

