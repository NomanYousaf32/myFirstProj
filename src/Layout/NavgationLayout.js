import { Link, NavLink } from "react-router-dom";
import Header from "./Header";
import img from "../assets/images/header-logo.png";
import cartPic from "../assets/images/add-to-cart.png";
import { useEffect, useState } from "react";

const NavigationLayout = () => {
  const miniBox = JSON.parse(localStorage.getItem(`userCart`));

  const [isShow, setIsShow] = useState();
  const [productsCart, setProducts] = useState();
  const [update,setUpdate]=useState(true)
  console.log("kkkkkkk");

  useEffect(() => {
    if (update===true) {
      
      setProducts(miniBox.products);
      setUpdate(false)
    }else{
      return;
    }
   
  }, [miniBox.products, update]);

  

  const removeItemFromList = (index) => {
    let products = productsCart;
    products.splice(index, 1);
    miniBox.products=products
    setUpdate(true)

    localStorage.setItem(`userCart`, JSON.stringify(miniBox))

      
     
  };

  return (
    <>
      <Header />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <span className="navbar-brand">
            <img src={img} alt="" />
          </span>
          <div className="cart-img">
            <button onClick={() => setIsShow(!isShow)}>
              <div className="image-cart">
                <img src={cartPic} style={{ height: 50, width: 50 }} alt="" />
              </div>
              <span className="value-cart">
                {productsCart ? <div>{productsCart.length}</div> : <div>0</div>}
              </span>
            </button>
            {isShow ? (
              <div className="minibox">
                {productsCart ? (
                  <>
                    {productsCart.map((productCart, index) => (
                      <div key={productCart.ProductId}>
                        <Link to={`/products/` + productCart.ProductId} >
                      <div className="data-box" >
                          <img src={productCart.image} alt="" />
                          <div className="titleCart"> {productCart.title} </div>
                          <p> Quantity {productCart.Quantity}</p>
                      </div>
                        </Link>
                        <button onClick={() => removeItemFromList(index)}>
                          remove
                        </button>
                        </div>
                    ))}
                  </>
                ) : (
                  <div>there is no data in Notification</div>
                )}
              </div>
            ) : null}
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>

                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/AboutUs" className="nav-link">
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ContactUs" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavigationLayout;
