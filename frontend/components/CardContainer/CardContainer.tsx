import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../src/store/features/authSlice/authSlice";

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
  const user = useSelector(selectUser);
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
          <Link to={
            user ? '/travel-deals' : '/login'
          } className="button">{card.button}</Link>
        </div>
  );
};

export default CardContainer;
