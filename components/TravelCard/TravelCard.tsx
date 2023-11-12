import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectUser } from '../../src/store/features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';
const TravelCard = ({ card, index }: any) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
          <div key={index} className={`card-t card-t-${index + 1}`}>
            <div className="travel-card">
              <div className="image-container">
                {user && <span className="heart-button"><AiOutlineHeart className="heart" /></span>}
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
                  <span className="old-price">From <span>${card.oldPrice}</span></span>
                  <span className="new-price">${card.price}</span>
                </div>
                <span className="button" onClick={() => {navigate(`/sr?q=${card.url}`)}}>{card.button}</span>
              </div>
            </div>
          </div>
  );
};

export default TravelCard;
