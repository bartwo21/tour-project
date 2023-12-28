import "./TravelDeals.scss";
import TravelCard from "../../../components/TravelCard/TravelCard";
import { travelCards } from "../home/cardsArray";
import { AiOutlineDown } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const TravelDeals = () => {
  const destinations = Array.from(
    new Set(travelCards.map((card) => card.destination))
  );
  const prices = [100, 200, 400];
  const groupSizes = [
    { from: 0, to: 5 },
    { from: 6, to: 10 },
    { from: 11, to: 15 },
  ];
  let [searchParams, setSearchParams] = useSearchParams();
  const [rememberCheckedInputs, setRememberCheckedInputs] = useState<string[]>(
    searchParams.getAll("destination") ||
      searchParams.getAll("price") ||
      searchParams.getAll("group") ||
      searchParams.getAll("sort") ||
      []
  );
  const controls = useAnimation();

  const [dropdownStates, setDropdownStates] = useState<{
    destination: boolean;
    price: boolean;
    group: boolean;
    sort: boolean;
  }>({
    destination: false,
    price: false,
    group: false,
    sort: false,
  });

  const dropdownRefs = {
    destination: useRef(null),
    price: useRef(null),
    group: useRef(null),
    sort: useRef(null),
  };

  const handleFilter = (type: string, value: string) => {
    const filtered = travelCards.filter(
      (card: { [key: string]: any }) => card[type] === value
    );
    setFilteredCards(filtered);
  };
  const handleUpTo = (type: string, value: number) => {
    const filtered = travelCards.filter(
      (card: { [key: string]: any }) => card[type] <= value
    );
    setFilteredCards(filtered);
  };

  const groupNumberRange = (
    type: string,
    firstIntervalValue: number,
    secondIntervalValue: number
  ) => {
    const filtered = travelCards.filter(
      (card: { [key: string]: any }) =>
        card[type] >= firstIntervalValue && card[type] <= secondIntervalValue
    );
    setFilteredCards(filtered);
  };
  const sortInAscendingOrDescendingOrderArray = (type: string) => {
    const sorted = [...travelCards];
    sorted.sort((a, b) => {
      const aValue = parseFloat((a as any)[type]);
      const bValue = parseFloat((b as any)[type]);

      if (!dropdownStates.sort) {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
    setFilteredCards(sorted);
  };

  const [filteredCards, setFilteredCards] = useState<
    {
      id: number;
      img: string;
      map: string;
      url: string;
      title: string;
      destination: string;
      description: string;
      groupSize: number;
      stars: number;
      oldPrice: number;
      price: number;
      button: string;
      favorite: boolean;
    }[]
  >(
    searchParams.get("sort") == "asc"
      ? travelCards.sort((a, b) => {
          return (
            parseFloat(a.price.toString()) - parseFloat(b.price.toString())
          );
        })
      : travelCards.sort((a, b) => {
          return (
            parseFloat(b.price.toString()) - parseFloat(a.price.toString())
          );
        })
  );
  useEffect(() => {
    const destinationParam = searchParams.get("destination");
    const priceParam = searchParams.get("price");
    const groupParam = searchParams.get("group");
    if (destinationParam) {
      handleFilter("destination", destinationParam);
    }
    if (priceParam) {
      handleUpTo("price", parseFloat(priceParam));
    }
    if (groupParam) {
      const [from, to] = groupParam.split("_");
      groupNumberRange("groupSize", parseFloat(from), parseFloat(to));
    }
  }, [
    searchParams.get("destination"),
    searchParams.get("price"),
    searchParams.get("group"),
    searchParams.get("sort"),
  ]);
  useEffect(() => {
    controls.set({ y: 2 });
    controls.start({ y: 0 });
  }, [filteredCards]);

  return (
    <div className="travel-deals">
      <div className="travel-cards-container">
        <div className="titles">
          <h1>Black Friday travel deals</h1>
          <h2>The Season of Travel Sale</h2>
          <p>
            Save up to $400 on trips to the shores of Costa del Sol, the grand
            boulevards of Madrid, and beyond.† Plus, lean on our 24/7 On-Tour
            Support team every step of the way.
          </p>
        </div>
        <div className="travels">
          <div className="filter-tab">
            <ul>
              <li>
                <div
                  onClick={() =>
                    setDropdownStates({
                      ...dropdownStates,
                      destination: !dropdownStates.destination,
                      price: false,
                      group: false,
                      sort: false,
                    })
                  }
                  className="select-box-title"
                >
                  <span>Destinations</span>
                  <i className={dropdownStates.destination ? "up" : "down"}>
                    <AiOutlineDown />
                  </i>
                </div>
                {dropdownStates.destination && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="dropdown-content"
                    ref={dropdownRefs.destination}
                  >
                    {destinations.map((destination, index) => (
                      <span className="dropdown-link" key={index}>
                        <input
                          id={`radio${index}`}
                          type="radio"
                          checked={rememberCheckedInputs.includes(destination)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRememberCheckedInputs([destination]);
                              handleFilter("destination", destination);
                              setSearchParams({ destination });
                            } else {
                              setRememberCheckedInputs([]);
                              setFilteredCards(travelCards);
                              setSearchParams({});
                            }
                          }}
                        />
                        <label htmlFor={`radio${index}`}>{destination}</label>
                      </span>
                    ))}
                  </motion.div>
                )}
              </li>
              <li>
                <div
                  onClick={() =>
                    setDropdownStates({
                      ...dropdownStates,
                      price: !dropdownStates.price,
                      destination: false,
                      group: false,
                      sort: false,
                    })
                  }
                  className="select-box-title"
                >
                  <span>Price</span>
                  <i className={dropdownStates.price ? "up" : "down"}>
                    <AiOutlineDown />
                  </i>
                </div>
                {dropdownStates.price && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="dropdown-content"
                    ref={dropdownRefs.price}
                  >
                    {prices.map((price, index) => (
                      <span className="dropdown-link" key={index}>
                        <input
                          id={`radio${index}`}
                          type="radio"
                          checked={
                            rememberCheckedInputs.includes(price.toString()) ||
                            searchParams.get("price") === price.toString()
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              setRememberCheckedInputs([price.toString()]);
                              handleUpTo("price", price);
                              setSearchParams({ price: price.toString() });
                            } else {
                              setRememberCheckedInputs([]);
                              setFilteredCards(travelCards);
                              setSearchParams({});
                            }
                          }}
                        />
                        <label htmlFor={`radio${index}`}>Up to {price}$</label>
                      </span>
                    ))}
                  </motion.div>
                )}
              </li>
              <li>
                <div
                  onClick={() =>
                    setDropdownStates({
                      ...dropdownStates,
                      group: !dropdownStates.group,
                      destination: false,
                      price: false,
                      sort: false,
                    })
                  }
                  className="select-box-title"
                >
                  <span>Group</span>
                  <i className={dropdownStates.group ? "up" : "down"}>
                    <AiOutlineDown />
                  </i>
                </div>
                {dropdownStates.group && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="dropdown-content"
                    ref={dropdownRefs.group}
                  >
                    {groupSizes.map((groupSize, index) => (
                      <span className="dropdown-link" key={index}>
                        <input
                          id={`radio${index}`}
                          type="radio"
                          checked={
                            (rememberCheckedInputs.includes(
                              groupSize.from.toString()
                            ) &&
                              rememberCheckedInputs.includes(
                                groupSize.to.toString()
                              )) ||
                            searchParams.get("group") ===
                              `${groupSize.from.toString()}_${groupSize.to.toString()}`
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              groupNumberRange(
                                "groupSize",
                                groupSize.from,
                                groupSize.to
                              );
                              setRememberCheckedInputs([
                                groupSize.from.toString(),
                                groupSize.to.toString(),
                              ]);
                              const grp = `${groupSize.from.toString()}_${groupSize.to.toString()}`;
                              setSearchParams({ group: grp });
                            } else {
                              setFilteredCards(travelCards);
                              setRememberCheckedInputs([]);
                              setSearchParams({});
                            }
                          }}
                        />
                        <label htmlFor={`radio${index}`}>
                          {groupSize.from}-{groupSize.to}
                        </label>
                      </span>
                    ))}
                  </motion.div>
                )}
              </li>
              <li>
                <div
                  onClick={(e) => {
                    if (e.target) {
                      sortInAscendingOrDescendingOrderArray("price");
                      const sort = dropdownStates.sort ? "desc" : "asc";
                      setSearchParams({ sort });
                      setRememberCheckedInputs([]);
                    } else {
                      setFilteredCards(travelCards);
                    }
                    setDropdownStates({
                      ...dropdownStates,
                      sort: !dropdownStates.sort,
                      destination: false,
                      price: false,
                      group: false,
                    });
                  }}
                  className="select-box-title"
                >
                  <span>Sort</span>
                  {searchParams.get("sort") == "asc" ? (
                    <span className="sort-info">Price: Low to high</span>
                  ) : (
                    <span className="sort-info">Price: High to low</span>
                  )}
                  <i
                    className={
                      searchParams.get("sort") == "desc" ? "up" : "down"
                    }
                  >
                    <AiOutlineDown />
                  </i>
                </div>
              </li>
            </ul>
          </div>
          <motion.div animate={controls} className="travel-cards">
            {filteredCards.map((card, index) => {
              return <TravelCard card={card} index={index} />;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TravelDeals;
