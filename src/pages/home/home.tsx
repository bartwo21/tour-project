import React from 'react';
import './home.scss';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

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
  title: string;
  description: string;
  stars: number;
  price: string;
  button: string;
};

const Home: React.FC<Props> = ({}) => {
  const cards: Card[] = [
    { size: 2, title: 'Card 1 Content', p: "Lorem ipsum dolor sit amet.", button: "Browse by destination", img: img1 },
    { size: 1, title: 'Card 2 Content', p: "Lorem ipsum dolor sit amet.", button: "Browse by destination", img: "" },
    { size: 1, title: 'Card 3 Content', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Browse by destination", img: img3 },
    { size: 1, title: 'Card 4 Content', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Browse by destination", img: img4 },
    { size: 1, title: 'Card 5 Content', p: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "Browse by destination", img: img5 },
  ];

  const sliderCards: SliderCards[] = [
    { title: "Experiential travel made easy", description: "You dream it. We’ll take care of every last detail.", button: "Find out how we do it" },
    { title: "Pick your perfect trip", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Put just $299 down", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Prep your packing list", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
    { title: "Say bon voyage!", description: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.", button: "" },
  ]

  const biggerCards: Card[] = [
    { size: 1, title: 'Card 1 Content', p: "You’ll enjoy some pretty sweet perksalong the way. You’ll enjoy some pretty sweet perksalong the way.", button: "Browse by destination", img: img2 },
    { size: 1, title: 'Card 2 Content', p: "Lorem ipsum dolor sit amet. Destination and real traveler stories to inspire and enrich your next trip.", button: "Browse by destination", img: img6 },
    { size: 1, title: 'Save up to $200 with Specials', p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit!", button: "Browse by destination", img: "" },
  ]
  const travelCards: TravelCards[] = [
    
  ]
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2.5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
      <div className="card-container">
        {cards.map((card: Card, index) => (
            <div
              key={index}
              className={`card card-${index + 1}`}
              style={{
                flex: card.size,
                backgroundImage: `url(${card.img})`,
              }}
            >
              <p className="card-title">{card.title}</p>
              <p className="card-p">{card.p}</p>
              <span className="button">{card.button}</span>
            </div>
          ))}
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderCards.map((card: SliderCards, index: number) => (
            <div key={index} className={`card-s card-s-${index + 1}`}>
              <div className="slider-card">
                <p className="slider-card-title">{card.title}</p>
                <p className="slider-card-p">{card.description}</p>
                <span className="button">{card.button}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card-container">
        {biggerCards.map((card: Card, index) => (
            <div
              key={index}
              className={`card card-bigger-${index + 1}`}
              style={{
                flex: card.size,
                backgroundImage: `url(${card.img})`,
              }}>
              <p className="card-title">{card.title}</p>
              <p className="card-p">{card.p}</p>
              <span className="button">{card.button}</span>
            </div>
          ))}
      </div>
      <div className="travel-cards">
        
      </div>
    </div>
  );
};

export default Home;
