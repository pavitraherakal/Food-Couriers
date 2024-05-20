import { useContext } from "react";
import { RESTAURANT_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestrorantContainer=(props)=>{

    const  {resdata}=props;

    const data=useContext(UserContext);
    const { cloudinaryImageId,name,cuisines,costForTwo,avgRating}=resdata;
      return(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  <div data-testid="restcard" className=" bg-gray-100 m-2 p-2 h-72 w-56  hover:bg-gray-200  ">
                      <img className=" h-40 w-56" alt="restro-img" 
                      src={RESTAURANT_IMG+cloudinaryImageId}></img>
                      <h3 className=" line-clamp-3 font-bold text-md">{name}</h3>
                      <h3 className="text-sm truncate ...">{cuisines.join(", ")}</h3>
                      <h3 className="text-sm">{costForTwo}</h3>
                      <h1 className=" bg-green-300 w-12" >{avgRating}  </h1>
                     
    
</div>
                 
                  </div>
                  
      )
  }
  /* Higher order component*/ 
  // input restorantcard==>output promotedrestorantcard

  export const withPromotedLabel=(RestrorantContainer)=>{
    return (props)=>{
         return( 
            <div data-testid="promtedcards">
             <label className=" absolute bg-black text-white px-2 mx-4 rounded-md">Promoted</label>
            <RestrorantContainer  {...props}/>
            </div>

           )

    }
  }
  export default RestrorantContainer;