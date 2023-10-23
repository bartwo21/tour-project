
const InfoCard = ({ card, index }: any) => {
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