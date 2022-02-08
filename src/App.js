import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Footer from "./Layout/Footer";
import SinglePage from "./pages/SinglePages";
import ProductsComponents from "./Components/productsComponents";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/owl.css";
import "./assets/css/tooplate-main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="products" element={<ProductsComponents />} />
        <Route path="category/:categories" element={<Products />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="products/:id" element={<SinglePage />} />
        <Route>404 NOT FOUND</Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
