import { useEffect,useState } from "react";
const useRestaurantMenu=(resId)=>{
    const [restData,setResData]=useState(null);
    useEffect(
        ()=>{
            fetchMenu()
        },[]);
       
        const fetchMenu=async()=>{
            const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8842818&lng=77.5843284&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true");  
                 const json = await data.json();
            setResData(json);
    
        }
    return restData;

}
export default useRestaurantMenu;