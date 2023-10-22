type Card = {
    size: number;
    title: string;
    p: string;
    button: string;
    img: string;
  };
type CardContainerProps = {
  cards: Card[];
};

const CardContainer = ({ cards }: CardContainerProps) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card card-${index + 1}`}
          style={{
            flex: (card as Card).size,
            backgroundImage: `url(${(card as Card).img})`,
          }}
        >
          <p className="card-title">{(card as Card).title}</p>
          <p className="card-p">{(card as Card).p}</p>
          <span className="button">{(card as Card).button}</span>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
