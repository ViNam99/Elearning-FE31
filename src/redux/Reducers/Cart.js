import { ADD_TO_CART, DELETE_CART } from "../Constants/Cart";

const initialState = {
  cart: [],
  count: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.count =action.count;
      localStorage.setItem('countCart', JSON.stringify(state.count));
      return {
        ...state
      };
    case DELETE_CART:
      state.count= action.count;
      state.cart=action.cart;
      return {
        ...state
      };
    default: {
      return state;
    }
  }
};
export default cartReducer;
