import { ADD_TO_CART } from "../Constants/Cart";

const initialState = {
  cart: [],
  count: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.count =action.count;
      return {
        ...state
      };
    default: {
      return state;
    }
  }
};
export default cartReducer;
