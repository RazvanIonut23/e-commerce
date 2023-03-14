import "./App.css";
import Navbarul from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Components/CartPage/CartPage";
import { createContext, useEffect, useState } from "react";
import AdressPage from "./Components/Adress/AdressPage";

export const context = createContext(null);

function App() {
  const [details, setDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilter(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartProducts");
    if (localStorage.getItem("cartProducts"))
      if (cartItems.length > 0) {
        setDetails(JSON.parse(cartItems));
      }
  }, []);

  const contextValues = {
    details,
    setDetails,
    products,
    setProducts,
    filter,
    setFilter,
    size,
    setSize,
    quantity,
    setQuantity,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <context.Provider value={contextValues}>
      <div className="App">
        <Navbarul />
        <div className="layout">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/product/:productId" element={<ProductPage />} />
            <Route exact path="/product/cart" element={<CartPage />} />
            <Route exact path="/adress" element={<AdressPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </context.Provider>
  );
}

export default App;
