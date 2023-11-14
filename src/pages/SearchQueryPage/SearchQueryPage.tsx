import { AiOutlineHeart } from 'react-icons/ai';
import "./SearchQueryPage.scss";
import { useReducer, useState } from 'react';
import { DateRangePicker, Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import reducer from "./reducer"
import Payment from "../../../components/Payment/Payment"

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
  isFormSubmitted: false,
}

const SearchQueryPage = ({ matchingSearch }: SearchQueryPageProps) => {

  const [state , dispatch] = useReducer(reducer, initialState);
  const [openPayment, setOpenPayment] = useState(false);
  const [data , setData] = useState<{
    date: Date;
    person: number;
    nameSurname: string;
    email: string;
    ticket: string;
    isFormSubmitted: boolean;
  }>({
    date: state.date,
    person: state.person,
    nameSurname: state.nameSurname,
    email: state.email,
    ticket: state.ticket,
    isFormSubmitted: state.isFormSubmitted,
  })

  const handleSubmit = () => {
    if(state.date !== null && state.person !== 0 && state.nameSurname !== '' && state.email !== '' && state.ticket !== '') {
      setData({
        date: state.date,
        person: state.person,
        nameSurname: state.nameSurname,
        email: state.email,
        ticket: state.ticket,
        isFormSubmitted: true,
      })
      setOpenPayment(true);
    }
  }

  return (
    <div className='container'>
      <h3 className='subtitle'>Travel Details</h3>
      <div className="content">
        <div className="left-img">
          <img src={matchingSearch.img} alt={matchingSearch.title} />
        </div>
        <div className="bottom">
          <div className="card-infos">
            <h2>{matchingSearch.title}</h2>
            <p className='days'>The daily price is equivalent to ${matchingSearch.price}</p>
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
      <Divider />
      <div className="reservation">
        <div className="inputs">
          <div className="row">
            <div className="box">
              <h3>Location</h3>
              <input type="text" disabled className="location" value={matchingSearch.title} />
            </div>
            <div className="box">
              <h3>Date</h3>
              <DateRangePicker className='date' format="dd-MM-yyyy" placeholder="Select Date Range" name='date' onChange={
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
                <input type="radio" value="Our" name="flight" className='radio-button' onChange={
                  (e) => dispatch({ type: 'SET_TICKET', payload: e.target.value })
                }/>
                <p>Book our airfare package from</p>
              </div>
              <div className="button-box">
                <input type="radio" value="Himself" name="flight" className='radio-button' onChange={
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
      {data.isFormSubmitted && (
        <Payment
          person={data.person}
          date={data.date}
          nameSurname={data.nameSurname}
          email={data.email}
          ticket={data.ticket}
          onePrice={parseInt(matchingSearch.price)}
          openPayment={openPayment}
          setOpenPayment={setOpenPayment}
        />
      )}
    </div>
  );
};

export default SearchQueryPage

