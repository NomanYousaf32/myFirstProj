import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import NavigationLayout from "../Layout/NavgationLayout";

const Products = () => {
  const post = useSelector((state) => state.allProducts.products);
  const [isChecked, setChecked] = useState(false);
  // const prams=useParams()


  // useEffect(()=>{

  // })



  return (
    <div>
      {post.length === 0 ? (
        <div className="Loading">
          <p>....Loading</p>
        </div>
      ) : (
        <>
          <NavigationLayout />

          <div className="featured-page">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="section-heading">
                    <div className="line-dec"></div>
                    <h1>Featured Items</h1>
                  </div>
                </div>
                <div className="col-md-8 col-sm-12">
                  <div id="filters" className="button-group">
                    <NavLink to="/products" className="btn btn-primary">
                      AllProducts
                    </NavLink>
                    {
                      <button
                        className="btn btn-primary"
                        onClick={() => setChecked(!isChecked)}
                      >
                        categories
                      </button>
                    }

                    {/* <Link to="/products/category/jewelery"> categories</Link> */}

                    <button className="btn btn-primary" data-filter=".low">
                      Low Price
                    </button>
                    <button className="btn btn-primary" data-filter=".high">
                      Hight Price
                    </button>
                  </div>
                </div>
              </div>
              </div>
              </div>
                    

          <div className="featured container no-gutter">
            <div className="row posts">
              {post.map((posts) => (
                <div className="item new col-md-4" key={posts.id}>
                  <Link to={`/products/${posts.id}`}>
                    <div className="featured-item">
                      <img src={posts.image} alt="" />
                      <h4>{posts.title}</h4>
                      <h6>{posts.price}$</h6>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="page-navigation">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <ul>
                      <li className="current-page">
                        <NavLink to="">1</NavLink>
                      </li>
                      <li>
                        <NavLink to="">2</NavLink>
                      </li>
                      <li>
                        <NavLink to="">3</NavLink>
                      </li>
                      <li>
                        <p>
                          <i className="fa fa-angle-right"></i>
                        </p>
                      </li>
                    </ul>
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
export default Products;
