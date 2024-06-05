import RestorantCategories from "./RestorantCategories";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestraurantMenu";
import { useState } from "react";

const Restaurantmenu = () => {
  const { resId } = useParams();
  const [showIndex, setshowIndex] = useState(0);
  const dummy = "Dummy Data";
  const restData = useRestaurantMenu(resId);

  if (restData === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restData?.data?.cards[2]?.card?.card?.info;
  // const itemCards=restData?.data?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[1].card.card.itemCards;

  const categories =
    restData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="p-2 m-2 text-center">
      <span className="font-bold text-2xl"> {name}</span>
      <h3 className=" font-bold py-2 text-sm">
        {cuisines.join(", ")}-{costForTwoMessage}
      </h3>
      <div>
        {categories.map((category, index) => (
          <RestorantCategories
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};
export default Restaurantmenu;
