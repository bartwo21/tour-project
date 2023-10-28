type props = {
  card: {
    title: string;
    description: string;
    button: string;
  };
  index: number;
}

const InfoCard = ({ card, index }: props) => {
  return (
    <div key={index} className={`card-s card-s-${index + 1}`}>
      <div className="slider-card">
        <p className="slider-card-title">{card.title}</p>
        <p className="slider-card-p">{card.description}</p>
        <span className="button">{card.button}</span>
      </div>
    </div>
  )
}

export default InfoCard