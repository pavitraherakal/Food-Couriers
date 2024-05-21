import React ,{Suspense, lazy, useContext, useState,useEffect} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import Restaurantmenu from "./components/Restaurantmenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Appstore from "./utils/ReduxStore/Appstore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
//lazy loading

  const Grocery=lazy(()=>import("./components/Grocery"));
  const About=lazy(()=>import("./components/About"));

//Main App Component
const AppComponent=()=>{
  const data=useContext(UserContext);
  const [userName,setUserName]= useState();
  useEffect(()=>{
const data={
  name:"Pavitra"
}
setUserName(data.name);
  },[])


 return(
  <Provider store={Appstore}>
    <UserContext.Provider value={{loggedinUser:userName}}>
      
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
     </UserContext.Provider>
     </Provider>
    )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />,
    children:[  
      {
        path:"/",
        element:<Body />
      } ,
       {
        path:"/about",
        element:<Suspense fallback={<Shimmer />}><About /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurant/:resId",
        element:<Restaurantmenu />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement:<Error />
  }
  

]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);//put int dom and convert in to html