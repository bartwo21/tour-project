import { cards, biggerCards, sliderCards, travelCards } from './cardsArray';
import './home.scss';
import logo1 from './logos/logo1.svg';
import logo2 from './logos/logo2.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravelCard from "../../../components/TravelCard/TravelCard";
import CardContainer from "../../../components/CardContainer/CardContainer";
import InfoCard from "../../../components/InfoCard/InfoCard";
import Slider from 'react-slick';

const Home = ({}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2.5,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  
  // const user = useSelector(selectUser);

  return (
    <div className="home">
      <h1 className="subtitle">Immersive guided tours, all around the globe</h1>
      <h3 className="title">
        Explore with a friend, the whole family, or solo. However—and wherever—you want to go, our
        expert-planned group travel experiences make it easy to see the world.
      </h3>
      <div className="card-container">
        {cards.map((card, index) => (
          <CardContainer card={card} index={index} />
        ))}
      </div>
      <div className="slider-container">
        <div className="inner-slider">
          <Slider {...settings}>
            {sliderCards.map((card, index) => (
              <InfoCard card={card} index={index} />
              ))}
          </Slider>
        </div>
      </div>
      <div className="card-container">
        {biggerCards.map((card, index) => (
          <CardContainer card={card} index={index} />
        ))}
      </div>
      <div className="travel-cards">
        <div className="titles">
          <div className="inner-titles">
            <div className="subtitle">
              <h1>Ready to start traveling?</h1>
              <p>Choose from more than 200 one-of-a-kind group travel experiences, carefully designed by experts, led by locals, and made for you.</p>
            </div>
            <button className="button-travel">
              Shop all group tours
            </button>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
          {travelCards.slice(0, 4).map((card, index) => (
            <TravelCard card={card} index={index} />
          ))}
          </Slider>
        </div>
      <div className="logos">
          <div className="logo">
            <img src={logo1} alt="" />
          </div>
          <div className="logo">
            <img src={logo2} alt="" />
          </div>
      </div>
      </div>
      </div>
  );
};

export default Home;
