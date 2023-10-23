import React from 'react';
import './home.scss';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import travelimg1 from './travelimg/1.jpg';
import travelimg2 from './travelimg/2.jpg';
import travelimg3 from './travelimg/3.jpg';
import travelimg4 from './travelimg/4.jpg';
import travelimg5 from './travelimg/5.jpg';
import mapimg1 from './mapimg/1.webp';
import mapimg2 from './mapimg/2.webp';
import mapimg3 from './mapimg/3.webp';
import mapimg4 from './mapimg/4.jpg';
import mapimg5 from './mapimg/5.jpg';
import logo1 from './logos/logo1.svg';
import logo2 from './logos/logo2.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravelCard from "../../../components/TravelCard/TravelCard";
import CardContainer from "../../../components/CardContainer/CardContainer";
import InfoCard from "../../../components/InfoCard/InfoCard";
import Slider from 'react-slick';


type Card = {
  size: number;
  title: string;
  p: string;
  button: string;
  img: string;
};

type SliderCards = {
  title: string;
  description: string;
  button: string; 
}
type TravelCards = {
  img: string;
  map: string;
  title: string;
  description: string;
  stars: number;
  oldPrice: string;
  price: string;
  button: string;
};

const Home = ({}) => {
  const cards: Card[] = [
    { size: 2, title: 'OPEN A WORLD OF POSSIBILITIES', p: "Lorem ipsum dolor sit amet.", button: "Browse by destination", img: img1 },
    { size: 1, title: 'Save up to $200 per person', p: "Lorem ipsum dolor sit amet.", button: "Browse by destination", img: "" },
    { size: 1, title: 'Off-season travel', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Find your off-season tour", img: img3 },
    { size: 1, title: 'Grand Tours', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Shop Grand Tours", img: img4 },
    { size: 1, title: 'New & trending', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Check out what's new", img: img5 },
  ];

  const sliderCards: SliderCards[] = [
    { title: "Experiential travel made easy", description: "You dream it. We’ll take care of every last detail.", button: "Find out how we do it" },
    { title: "Pick your perfect trip", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Put just $299 down", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Prep your packing list", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Say bon voyage!", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
  ]
  const biggerCards: Card[] = [
    { size: 1, title: 'Traveling with 7+', p: "You’ll enjoy some pretty sweet perksalong the way.", button: "Browse by destination", img: img2 },
    { size: 1, title: 'Ready, set, get inspired', p: "Lorem ipsum dolor sit amet. Destination and real traveler stories to inspire and enrich your next trip.", button: "Browse by destination", img: img6 },
    { size: 1, title: 'Save up to $200 with Specials', p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, quibusdam.", button: "Shop last-minute deals", img: "" },
  ]
  const travelCards: TravelCards[] = [
    { img: travelimg1, map: mapimg1, title: "Dolmabahce Sarayi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit!", stars: 4.5,oldPrice: "$4,012" ,price: "$3,719", button: "View tour" },
    { img: travelimg2, map: mapimg2, title: "Norway Mountains", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit!", stars: 4.5,oldPrice: "$5,524" ,price: "$4,239", button: "View tour" },
    { img: travelimg3, map: mapimg3, title: "Majestic seas in Antalya", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit!", stars: 4.5,oldPrice: "$6,657" ,price: "$4,719", button: "View tour" },
    { img: travelimg4, map: mapimg4, title: "Australian Cliffs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit!", stars: 4.5,oldPrice: "$2,621" ,price: "$2,100", button: "View tour" },
    { img: travelimg5, map: mapimg5, title: "Maldives hotel by the sea", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit!", stars: 4.5,oldPrice: "$1,912" ,price: "$1,275", button: "View tour" },
  ]
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
  return (
    <div className="home">
      <h1 className="subtitle">Immersive guided tours, all around the globe</h1>
      <h3 className="title">
        Explore with a friend, the whole family, or solo. However—and wherever—you want to go, our
        expert-planned group travel experiences make it easy to see the world.
      </h3>
      <CardContainer cards={cards} />
      <div className="slider-container">
        <div className="inner-slider">
          <Slider {...settings}>
            {sliderCards.map((card: SliderCards, index: number) => (
              <InfoCard card={card} index={index} />
              ))}
          </Slider>
        </div>
      </div>
      <CardContainer cards={biggerCards} />
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
          {travelCards.map((card: TravelCards, index: number) => (
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
