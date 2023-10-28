type props = {
    card: {
      title: string;
      p: string;
      button: string;
      img: string;
      size: number;
    };
    index: number;
  };

const CardContainer = ({ card, index }: props) => {
  return (
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
  );
};

export default CardContainer;
