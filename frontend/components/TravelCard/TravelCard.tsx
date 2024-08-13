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
import { useUpdateUserMutation } from "../../src/store/features/usersApiSlice/usersApiSlice";

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

const TravelCard = ({
  card,
  index,
  handleFilter,
}: {
  card: TravelCards;
  index: number;
  handleFilter?: any;
}) => {
  const [updateProfile] = useUpdateUserMutation();
  const user = useSelector(selectUser);
  const favoriteCards = useSelector(selectFavoriteCards) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    user?.favoriteCards?.includes(card.id)
  );
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

  useEffect(() => {
    setIsFavorite(
      favoriteCards.includes(card.id) || user?.favoriteCards?.includes(card.id)
    );
  }, [handleFilter, navigate, user]);

  const handleFavorite = async () => {
    try {
      const updatedFavoriteCards = isFavorite
        ? favoriteCards.filter((id: any) => id !== card.id)
        : [...favoriteCards, card.id];

      await updateProfile({
        _id: user._id,
        favoriteCards: updatedFavoriteCards,
      }).unwrap();
      console.log("updatedFavoriteCards", updatedFavoriteCards);
      dispatch(toggleFavoriteCard(card.id));
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.log(error);
    }
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
              onClick={handleFavorite}
              className={
                isFavorite ? "heart-button heart-button-active" : "heart-button"
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
