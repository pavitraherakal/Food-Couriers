import RestrorantContainer, { withPromotedLabel } from "./RestrorantContainer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const Promotedrestorantcard = withPromotedLabel(RestrorantContainer);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistofRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredCards(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const onlinestatus = useOnlinestatus();
  if (onlinestatus === false) {
    return (
      <div>
        <h1>Looks like you are offline Check the internet connection.</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="flex p-2">
        <button
          className=" m-2 px-2 bg-gray-200 border-black"
          onClick={() => {
            const filterData = listofRestaurant.filter(
              (res) => res.info.avgRating > 4.0
            );

            setFilteredCards(filterData);
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <input
            data-testid="searchinput"
            type="text"
            className="bg-gray-200 m-2 p-2  border-current"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="btn"
            className="bg-gray-200 p-2 rounded-lg  "
            onClick={() => {
              const filterSearch = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredCards(filterSearch);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredCards.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <Promotedrestorantcard resdata={restaurant?.info} />
            ) : (
              <RestrorantContainer resdata={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
