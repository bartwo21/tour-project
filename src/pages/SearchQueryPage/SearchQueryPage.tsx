import { AiOutlineHeart } from 'react-icons/ai';
import "./SearchQueryPage.scss";
import { useReducer } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import reducer from "./reducer"
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

const initialState = {
  date: null,
  person: 0,
  nameSurname: '',
  email: '',
  ticket: '',
}

const SearchQueryPage = ({ matchingSearch }: SearchQueryPageProps) => {
  const [state , dispatch] = useReducer(reducer, initialState);
  const handleSubmit = () => {
    console.log(state);
  }

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
      <div className="reservation">
        <div className="inputs">
          <div className="row">
            <div className="box">
              <h3>Location</h3>
              <input type="text" disabled className="location" value={matchingSearch.title} />
            </div>
            <div className="box">
              <h3>Date</h3>
              <DateRangePicker format="dd-MM-yyyy" placeholder="Select Date Range" name='date' onChange={
                  (e) => dispatch({ type: 'SET_DATE', payload: e })  
              } />
            </div>
            <div className="box">
              <h3>Person</h3>
              <input
                type="number"
                className="person"
                value={state.person}
                onChange={(e) => {
                  const inputValue = parseInt(e.target.value, 10);
                  if (!isNaN(inputValue) && inputValue >= 0) {
                    dispatch({ type: 'SET_PERSON', payload: inputValue });
                  }
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="box">
              <h3>Name & Surname</h3>
              <input type="text" className="name-surname" onChange={
                  (e) => dispatch({ type: 'SET_NAMESURNAME', payload: e.target.value }) 
              }/>
            </div>
            <div className="box">
              <h3>Email</h3>
              <input type="text" className="email" onChange={
                  (e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value }) 
              }/>
            </div>
            <div className="box">
              <h3>Ticket</h3>
              <div className="button-box">
                <input type="radio" value="our" name="flight" className='radio-button' onChange={
                  (e) => dispatch({ type: 'SET_TICKET', payload: e.target.value })
                }/>
                <p>Book our airfare package from</p>
              </div>
              <div className="button-box">
                <input type="radio" value="self" name="flight" className='radio-button' onChange={
                  (e) => dispatch({ type: 'SET_TICKET', payload: e.target.value })
                }/>
                <p>I will book my own flights</p>
              </div>
            </div>
          </div>
        </div>
        <div className="button">
          <button onClick={handleSubmit}>Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default SearchQueryPage

