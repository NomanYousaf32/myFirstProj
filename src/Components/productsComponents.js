import Products from "../pages/Products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchProducts } from "../redux/Actions/productsActions";
import { useSelector } from "react-redux";


const ProductsComponents = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const prams = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, prams]);

  if (Object.keys(products).length === 0) {
    return (
      <div className="Loading">
        <p>....Loading</p>
      </div>
    );
  }
  return (
    <>
      
      <Products />
    </>
  );
};
export default ProductsComponents;
