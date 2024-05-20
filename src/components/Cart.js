import CategoryItemCards from "./CategoryItemCards";
import {  useDispatch, useSelector } from "react-redux";
import { clearCart ,addItem, removeItem,updateAmount} from "../utils/ReduxStore/cartslice";
import { RESTAURANT_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";


const Cart=()=>{
const cartitems=useSelector((store)=>store.cart);
let total=0;
cartitems.items.map((item)=>total+=item.sum);
const dispatch=useDispatch();
console.log(cartitems.items);
const handleClearItem=()=>{
    dispatch(clearCart());
   
}
const addProduct=(cartitem)=>{
    
    dispatch(addItem(cartitem));
   
}
const removeProduct=(cartitem)=>{
   
    dispatch(removeItem(cartitem));
   
}



    return(
  <div className=" w-6/12 mx-auto ">  
   <div className=" px-6 py-4 text-center underline font-bold text-xl">  Cart</div>
   {cartitems.items.length!=0? <button className="font-bold border border-gray-400 bg-slate-400 " 
        onClick={handleClearItem}>Clear Cart</button>: <h1 className="  text-md ">Shoping cart is empty.  <Link  className="font-bold underline" to="/">  Add Items to cart</Link> </h1>
    }
           {cartitems.items.map((cartitem)=>
        
           <div  key={cartitem.id} className="  p-2 m-2   border-gray-300 border-b-2 text-left  flex justify-between">
            <div>
               <p className=" font-bold text-sm"> {cartitem.name}</p>
               <p>₹{cartitem.price?cartitem.price/100:cartitem.defaultPrice/100}
               </p>
               <p className="font-normal text-sm">{cartitem.isVeg===1?"🟢":"🔴 "}  {cartitem.itemAttribute.vegClassifier}</p>
             
          </div> 
          <div> 
            <p className=" font-bold"> ₹{cartitem.sum/100}</p> </div>
          <div className="w-3/12 ">
          
             <img className=" size-20" src={RESTAURANT_IMG+cartitem.imageId}></img>   
             <div className="flex my-2" >  
             <button className=" text-center px-3 border border-gray-300 bg-white text-green-600  font-bold rounded-lg"
              onClick= {() => removeProduct(cartitem)}   >-</button>
                <button className=" px-5   border border-gray-300 text-center bg-white text-green-600  font-bold rounded-lg"
                >{cartitem.qty}</button>
                  <button className=" px-3  border border-gray-300 text-center bg-white text-green-600  font-bold rounded-lg"
               onClick= {() => addProduct(cartitem)}  >+</button>
             </div>
           </div>
           
       </div>
   
            )}  


 <div className=" text-right"> Total : ₹{cartitems.items.length!=0 &&total/100}</div>
{cartitems.items.length!=0 && <h1 className="  text-md "> <Link  className="font-bold underline" to="/"> Continue shopping</Link> </h1>}

 </div >
      

       
        
    )
}
export default Cart;