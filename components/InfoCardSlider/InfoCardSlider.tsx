import Slider from 'react-slick';

type SliderCards = {
    title: string;
    description: string;
    button: string; 
  }
  type InfoCardsSliderProps = {
    InfoCards: SliderCards[];
  };

const InfoCardSlider = ({InfoCards}: InfoCardsSliderProps) => {
    var settings = {
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
        <div className="inner-slider">
          <Slider {...settings}>
            {InfoCards.map((card: SliderCards, index: number) => (
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
      </div>
  )
}

export default InfoCardSlider