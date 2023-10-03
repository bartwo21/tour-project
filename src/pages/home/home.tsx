import React from 'react';
import './home.scss';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';

type Props = {};

type Card = {
  size: number;
  title: string;
  p: string;
  button: string;
  img: string;
};

const Home: React.FC<Props> = ({}) => {
  const cards: Card[] = [
    { size: 2, title: 'Card 1 Content', p: "Lorem ipsum dolor sit amet.", button: "Explore", img: img1 },
    { size: 1, title: 'Card 2 Content', p: "Lorem ipsum dolor sit amet.", button: "Explore", img: "" },
    { size: 1, title: 'Card 3 Content', p: "Lorem ipsum dolor sit amet.", button: "Explore", img: img3 },
    { size: 1, title: 'Card 4 Content', p: "Lorem ipsum dolor sit amet.", button: "Explore", img: img4 },
    { size: 1, title: 'Card 5 Content', p: "Lorem ipsum dolor sit amet.", button: "Explore", img: img5 },
  ];
  
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
                backgroundImage: `url(${card.img})`, // Set background image
              }}
            >
              <div className="background-image"></div>
              <p className="card-title">{card.title}</p>
              <p className="card-p">{card.p}</p>
              <span className="button">{card.button}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
