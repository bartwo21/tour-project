import { AiOutlineHeart } from 'react-icons/ai';
import "./SearchQueryPage.scss";
import { useReducer, useState } from 'react';
import { DateRangePicker, Divider, useToaster, Notification } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import reducer from "./reducer"
import Payment from "../../../components/Payment/Payment"
import { selectUser } from '../../store/features/authSlice/authSlice';
import { useSelector } from 'react-redux';

type SearchQueryPageProps = {
  matchingSearch: {
    id?: number;
    title: string;
    description: string;
    img: string;
    price: string;
    groupSize: string;
    stars: number;
  };
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

  const user = useSelector(selectUser);
  const toaster = useToaster();
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
    } else {
      toaster.push(<Notification>
        <div className="notification-content">
          <h5>Reservation Error !</h5>
          <p>Please fill in the requested information ⚠️</p>
        </div>
      </Notification>, {
        placement: 'topEnd',
        duration: 3000,
      });
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
              {user && <span className="heart-button"><AiOutlineHeart size={40} className="heart"/></span>}
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
      {user ? (
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
      ): (
      <div className="no-login">
        <h2 className='no-login-title'>You must be logged in to make a reservation !</h2>
      </div>
      )}
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
