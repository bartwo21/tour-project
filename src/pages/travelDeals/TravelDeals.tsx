import "./TravelDeals.scss";
import TravelCard from "../../../components/TravelCard/TravelCard";
import { travelCards } from "../home/cardsArray";
import { AiOutlineDown } from "react-icons/ai";
import { useState, useRef } from "react";

// multiple select

const TravelDeals = () => {
  const destinations = Array.from(
    new Set(travelCards.map((card) => card.destination))
  );
  const prices = [100, 200, 400];
  const groupSizes = [{ from: 0, to: 5 }, { from: 6, to: 10 }, { from: 11, to: 15 }];
  const [rememberCheckedInputs, setRememberCheckedInputs] = useState<string[]>([]);

  const [filteredCards, setFilteredCards] = useState<
    {
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
    }[]
  >(travelCards);
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
    console.log(firstIntervalValue, secondIntervalValue);
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

      if (dropdownStates.sort) {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
    setFilteredCards(sorted);
  };

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
                  <div
                    className="dropdown-content"
                    ref={dropdownRefs.destination}
                  >
                    {destinations.map((destination, index) => (
                      <span className="dropdown-link" key={index}>
                        <input
                          id={`checkbox${index}`}
                          type="checkbox"
                          checked={rememberCheckedInputs.includes(destination)}
                          onChange={
                            (e) => {
                              if (e.target.checked){
                                handleFilter("destination", destination)
                                setRememberCheckedInputs([...rememberCheckedInputs, destination])
                              }else {
                                setFilteredCards(travelCards);
                                setRememberCheckedInputs(rememberCheckedInputs.filter((item: string) => item !== destination))
                              }
                            }
                          }
                        />
                        <label htmlFor={`checkbox${index}`}>
                          {destination}
                        </label>
                      </span>
                    ))}
                  </div>
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
                  <div className="dropdown-content" ref={dropdownRefs.price}>
                    {prices.map((price, index) => (
                      <span className="dropdown-link" key={index}>
                        <input
                          id={`checkbox${index}`}
                          type="checkbox"
                          checked={rememberCheckedInputs.includes(price.toString())}
                          onChange={
                            (e) => {
                              if (e.target.checked){
                                handleUpTo("price", price)
                                setRememberCheckedInputs([...rememberCheckedInputs, price.toString()])
                              }else {
                                setFilteredCards(travelCards);
                                setRememberCheckedInputs(rememberCheckedInputs.filter((item: string) => item !== price.toString()))
                              }
                            }
                          }
                        />
                        <label htmlFor={`checkbox${index}`}>Up to {price}$</label>
                      </span>
                    ))}
                  </div>
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
                  <div className="dropdown-content" ref={dropdownRefs.group}>
                    {groupSizes.map((groupSize, index) => (
                      <span className="dropdown-link" key={index}>
                        <input
                          id={`checkbox${index}`}
                          type="checkbox"
                          checked={rememberCheckedInputs.includes(groupSize.from.toString()) && rememberCheckedInputs.includes(groupSize.to.toString())}
                          onChange={
                            (e) => {
                              if (e.target.checked){
                                groupNumberRange("groupSize", groupSize.from, groupSize.to)
                                setRememberCheckedInputs([...rememberCheckedInputs, groupSize.from.toString(), groupSize.to.toString()])
                              }else {
                                setFilteredCards(travelCards);
                                setRememberCheckedInputs(rememberCheckedInputs.filter((item: string) => item !== groupSize.from.toString() && item !== groupSize.to.toString()))
                              }
                            }
                          }
                        />
                        <label htmlFor={`checkbox${index}`}>
                          {groupSize.from}-{groupSize.to}
                        </label>
                      </span>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <div
                  onClick={(e) => {
                    if (e.target) {
                      sortInAscendingOrDescendingOrderArray("price");
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
                  <i className={dropdownStates.sort ? "up" : "down"}>
                    <AiOutlineDown />
                  </i>
                </div>
              </li>
            </ul>
          </div>
          <div className="travel-cards">
            {filteredCards.map((card, index) => {
              return <TravelCard card={card} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDeals;
