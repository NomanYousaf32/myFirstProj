import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProduct } from "../redux/Actions/productsActions";
import { removeselectProducts } from "../redux/Actions/productsActions";
import NavigationLayout from "../Layout/NavgationLayout";

const SinglePage = () => {
  const prams = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [update,setUpdate]=useState(true)
  const dispatch = useDispatch();
  const post = useSelector((state) => state.product);

 

  useEffect(() => {
    if(update===true){
      setUpdate(false)
      if (prams.id && prams.id !== " ") {
        dispatch(fetchProduct(prams.id))
      }
      return () => {
        dispatch(removeselectProducts());
      };
      
    }
    else{ 
      return;
    }

  }, [dispatch, prams.id,update]);
  


  const changeHandler = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      const value = parseInt(e.target.value || quantity);
      setQuantity(value);
    } else {
      return;
    }
  };


  const submitHandler = (e) => {
    setUpdate(true)
    e.preventDefault();
    if (localStorage.getItem(`token`)) {
      let userCart = JSON.parse(localStorage.getItem(`userCart`));

      let checkif = false;
      if (userCart) {
        userCart.products = userCart.products.map((cart) => {
          if (cart.ProductId === post.id) {
            cart.Quantity = quantity + cart.Quantity;

            checkif = true;
          }
          return cart;
        });

        if (!checkif) {
          userCart.products = [
            ...userCart.products,
            {
              ProductId: post.id,
              Quantity: quantity,
              image: post.image,
              title: post.title,
            },
          ];
        } else {
          checkif = false;
        }
      } else {
        userCart = {
          id: 1,

          products: [
            {
              ProductId: post.id,
              Quantity: quantity,
              image: post.image,
              title: post.title,
            },
          ],
        };
      }

      localStorage.setItem(`userCart`, JSON.stringify(userCart));
    } else {
      navigate("/ContactUs");
    }
    
    // navigate("/products")
  };

 
  return (
    <div>
      
      {Object.keys(post).length === 0 ? (
        <div className="Loading">
          <p>....Loading</p>
        </div>
      ) : (
        <>
        <NavigationLayout />
        <div className="single-product">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <div className="line-dec"></div>
                  {/* <h1>Rating{post.rating.rate}</h1> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-slider">
                  <div id="slider" className="flexslider">
                    <ul className="slides">
                      <img src={post.image} alt="" width="250px" />
                    </ul>
                  </div>
                  <div id="carousel" className="flexslider">
                    <ul className="slides"></ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-content">
                  <h4>{post.title}</h4>
                  <h6>{post.price} $</h6>
                  <p>{post.description}</p>
                  <span> left on stock</span>
                  <form action="" onSubmit={submitHandler}>
                    <label>Quantity:</label>
                    <input
                      name="quantity"
                      type="number"
                      className="quantity-text"
                      value={quantity}
                      min="1"
                      onChange={changeHandler}
                      required
                    />
                    <input
                      type="submit"
                      className="button"
                      value="Order Now!"
                    />
                  </form>
                  <div className="down-content">
                    <div className="categories">
                      <h6>
                        Category: <span>{post.category}</span>
                      </h6>
                    </div>
                    <div className="share">
                      <h6>Share: </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};
export default SinglePage;
