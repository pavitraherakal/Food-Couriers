import { useState } from "react";
import CategoryItemCards from "./CategoryItemCards";
const RestorantCategories=({data,showItems,setshowIndex,dummy})=>{
   const handleClick=()=>{
    setshowIndex();
   }

    return (
        <div className="w-6/12 p-2 my-2  mx-auto shadow-lg  bg-gray-100 ">
         <div className=" text-left  flex justify-between  cursor-pointer" onClick={handleClick} >
           <span className="font-bold "> {data?.title} ({data?.itemCards.length})</span> 
           <span >⬇️</span>
           </div>
           <div >
            {data?.itemCards.map((item)=>  showItems && <CategoryItemCards key={item.card.info.id} item={item} dummy={dummy} />)}
           </div>
           
        </div>

    )
}
export default RestorantCategories;