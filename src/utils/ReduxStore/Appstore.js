import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartslice";
const Appstore=configureStore({
    reducer:{
   cart:cartreducer
    }
});


export default Appstore; 