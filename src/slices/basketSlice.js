import { createSlice } from "@reduxjs/toolkit";
import Items from "../app/Items";

const initialState = {
  items: [],
};


export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {


      state.items = [...state.items, action.payload]
  

    },

    removeFromBasket:(state, action) =>{
      console.log(id);
      let newBasket = state.items.filter(({id}) => id != action.payload.id);

      state.items = newBasket; 
    }
  },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) =>
  total + item.price, 0);

export default basketSlice.reducer;
