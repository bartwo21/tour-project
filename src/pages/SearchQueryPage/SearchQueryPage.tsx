import { AiOutlineHeart } from 'react-icons/ai';
import "./SearchQueryPage.scss";
import { useEffect, useReducer, useState } from 'react';
import { DateRangePicker, Divider, useToaster, Notification } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import reducer from "./reducer"
import Payment from "../../../components/Payment/Payment"
import { selectUser, selectFavoriteCards, toggleFavoriteCard } from '../../store/features/authSlice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { travelCards } from '../home/cardsArray';
import NotFoundPage from '../notFound/NotFoundPage';


const initialState = {
  date: null,
  person: 0,
  nameSurname: '',
  email: '',
  ticket: '',
  isFormSubmitted: false,
}

const SearchQueryPage = () => {
  const user = useSelector(selectUser);
  const toaster = useToaster();
  const navigate = useNavigate();
  const dispatchCard = useDispatch();
  const favoriteCards  = useSelector(selectFavoriteCards);
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
  const query = window.location.pathname.slice(1);
  const matchingSearch = travelCards.find((travelCards) => travelCards.url === query) || undefined

  if (!matchingSearch) {
    return (
      <NotFoundPage />
    );
  }
  useEffect(() => {}, []);
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
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .3 }}
    className='container'>
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
              {user && <span className={
                favoriteCards.includes(matchingSearch.id) ? "heart-button heart-button-active" : "heart-button"
              } onClick={
                () => {
                  dispatchCard(toggleFavoriteCard(matchingSearch.id))
                }
              }><AiOutlineHeart size={40} className="heart"/></span>}
            </div>
          </div>
          <div className="bottom-imgs">
            <div className="bottom-img">
              <img src={matchingSearch.img2} alt={matchingSearch.title} />
            </div>
            <div className="bottom-img">
              <img src={matchingSearch.img3} alt={matchingSearch.title} />
            </div>
            <div className="bottom-img">
              <img src={matchingSearch.img4} alt={matchingSearch.title} />
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
        <h2 className='no-login-title'>You must be <span className='login' onClick={() => navigate("/login")}>logged in</span> to make a reservation !</h2>
      </div>
      )}
      {data.isFormSubmitted && (
        <Payment
          person={data.person}
          date={data.date}
          nameSurname={data.nameSurname}
          email={data.email}
          ticket={data.ticket}
          onePrice={matchingSearch.price}
          openPayment={openPayment}
          setOpenPayment={setOpenPayment}
        />
      )}
    </motion.div>
  );
};

export default SearchQueryPage
