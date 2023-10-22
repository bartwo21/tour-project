import Slider from "react-slick";
import { AiOutlineHeart } from 'react-icons/ai';

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

type TravelCardsSliderProps = {
  travelCards: TravelCards[];
};

const TravelCardsSlider = ({ travelCards }: TravelCardsSliderProps) => {
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
    <div className="slider-container">
      <Slider {...settings}>
        {travelCards.map((card: TravelCards, index: number) => (
          <div key={index} className={`card-t card-t-${index + 1}`}>
            <div className="travel-card">
              <div className="image-container">
                <span className="heart-button">
                  <AiOutlineHeart className="heart" />
                </span>
                <div className="travel-card-img">
                  <img src={card.img} alt="" />
                </div>
                <div className="travel-card-map">
                  <img src={card.map} alt="" />
                </div>
              </div>
              <div className="text-container">
                <p className="title">{card.title}</p>
                <p className="description">{card.description}</p>
                <div className="prices">
                  <span className="old-price">From <span>{card.oldPrice}</span></span>
                  <span className="new-price">{card.price}</span>
                </div>
                <span className="button">{card.button}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TravelCardsSlider;
