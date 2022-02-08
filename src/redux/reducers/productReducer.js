import { ActionTypes } from "../cosntants/action-types";

const initialSate = {
  products: [],
};
export const productReducer = (state = initialSate, { type, payload }) => {
  switch (type) {
  
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
      

    default:
      return state;
  }
};



export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};
