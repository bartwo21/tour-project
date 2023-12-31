import { useEffect, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  toggleFavoriteCard,
  selectFavoriteCards,
} from "../../src/store/features/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import "./TravelCard.scss";

type TravelCards = {
  id: number;
  img: string;
  map: string;
  title: string;
  url: string;
  description: string;
  stars: number;
  oldPrice: number;
  price: number;
  button: string;
  favorite: boolean;
};

const TravelCard = ({ card, index }: { card: TravelCards; index: number }) => {
  const user = useSelector(selectUser);
  const favoriteCards = useSelector(selectFavoriteCards);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.4 }}
      key={index}
      className={`card-t card-t-${index + 1}`}
    >
      <div className="travel-card">
        <div className="image-container">
          {user && (
            <span
              onClick={() => {
                dispatch(toggleFavoriteCard(card.id));
              }}
              className={
                favoriteCards.includes(card.id)
                  ? "heart-button heart-button-active"
                  : "heart-button"
              }
            >
              <AiOutlineHeart className="heart" />
            </span>
          )}
          <div className="travel-card-img">
            {!isImageLoaded && (
              <div className="loading-animation">
                <p>Loading...</p>
              </div>
            )}
            <img
              src={card.img}
              alt=""
              onLoad={handleImageLoad}
              style={{ display: isImageLoaded ? "block" : "none" }}
            />
          </div>
          <div className="travel-card-map">
            <img src={card.map} alt="" />
          </div>
        </div>
        <div className="text-container">
          <p className="title">{card.title}</p>
          <p className="description">{card.description}</p>
          <p className="description2">Fuga hic quas veritatis blanditiis.</p>
          <div className="bottom-row">
            <div className="prices">
              <span className="old-price">
                From <span>${card.oldPrice}</span>
              </span>
              <span className="new-price">${card.price}</span>
            </div>
            <span
              className="button"
              onClick={() => {
                navigate(`/${card.url}`);
              }}
            >
              {card.button}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TravelCard;
