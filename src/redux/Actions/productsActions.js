import Api from "../../Api/Api";
import { ActionTypes } from "../cosntants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await Api.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await Api.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });
};


export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeselectProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
