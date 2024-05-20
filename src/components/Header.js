//Header Component

import { useState,useContext } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const data=useContext(UserContext);
    const [btnNameReact ,setbtnNameReact]=useState("Login");
    const onlinestatus=useOnlinestatus();
    //subscribing to the store using selector
    const cartItems=useSelector((store)=>store.cart.items);
    let qty=0;
  cartItems.map((item)=>qty+=item.qty);


    return(<div className="flex  bg-blue-50 justify-between ">
        <div className="p-4 w-20">
            <img className="logo" alt="header-logo" src={LOGO_IMG}/>
        </div>
        <div>
            <ul className="flex m-4 p-4">
               <li className="px-4">Online Status: {onlinestatus?"✅":"🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
              <li className="px-4"><Link to="/grocery">Grocery</Link></li>
              <li className="px-4 font-bold ">
                <Link to="/cart"> 🛒({qty}-items)</Link>
                </li>
                
                <button className="logbtn" onClick=
                {()=>{btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")}}>{btnNameReact}</button>
          <li className="px-4">{data.loggedinUser}</li>
            </ul>
        </div>
    </div>)
}
export default Header;