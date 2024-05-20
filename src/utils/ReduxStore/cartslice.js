import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    
    reducers:{
   addItem:(state,action)=>{
            const isExist= state.items.find((item)=>item.id==action.payload.id);
            if(isExist)  {
       isExist.sum+=action.payload.price;
        isExist.qty+=1;
        
            } else{
                state.items.push({
                    ...action.payload,
                    sum:action.payload.price,qty:1},
                    );   
            }
          
        },
        removeItem:(state,action)=>{   
            
            const isExist= state.items.find((item)=>item.id==action.payload.id);
            if(isExist.qty>1)  {
                isExist.sum-=action.payload.price;
             isExist.qty-=1;
            }else{
                state.items.pop(
                    {...action.payload});
            }
               
       
        },
        clearCart:(state,action)=>{
          state.items.length=0;
        },
        updateAmount:(state)=>{
            state.total=0;
        let totalsum=0
        state.items.forEach((item)=>{
        totalsum+=item.sum;
         state.total=totalsum;
  
           })
   
     state.total= state.total;
        }
    }
});

export default cartslice.reducer;
export const {addItem,removeItem,clearCart,updateAmount}=cartslice.actions;