import { useDispatch } from "react-redux";
import { RESTAURANT_IMG } from "../utils/constants";
import cartslice from "../utils/ReduxStore/cartslice";
import { addItem } from "../utils/ReduxStore/cartslice";
const CategoryItemCards=({item,dummy})=>{

    const dispatch= useDispatch();

    const handleAdditem=(item)=>{
   //dispatch an action
   dispatch(addItem(item.card.info));
    }
 
return(
   
   <div className="  p-2 m-2   border-gray-300 border-b-2 text-left  flex justify-between">
       <div className=" w-9/12">
           <p className=" font-bold text-sm"> {item.card.info.name}</p>
           <p>₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}
           </p>
           <p className="font-normal text-sm">{item.card.info.isVeg===1?"🟢":"🔴 "}  {item.card.info.itemAttribute.vegClassifier}</p>
             
           <p className="text-xs  ">{item.card.info.description}</p>
      </div> 
      <div className="  mx-4 w-3/12  ">
      
         <img className="size-32" src={RESTAURANT_IMG+item.card.info.imageId}></img>   
         <div className="mx-5  my-2" >  
       
            <button className=" px-4 border border-gray-300  bg-white text-green-600  font-bold rounded-lg"
           onClick= {() => handleAdditem(item)} >Add  +</button>
             
         </div>
       </div>
   </div>




    )

}
export default CategoryItemCards;