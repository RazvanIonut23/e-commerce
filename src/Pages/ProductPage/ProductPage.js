import { Rating, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { context } from "../../App";
import Submenue from "../../Components/Products/Submenue";
import s from "./ProductPage.module.css";
import SizeDropdown from "./SizeDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = (props) => {
  const consumer = useContext(context);
  const notify = () => toast();
  const [value, setValue] = useState(null);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const [products, setProducts] = useState([]);

  const handleClick = (event) => {
    toast.success("Added to cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    event.preventDefault();
    let cartItems = [];
    consumer.setDetails((prevState) => {
      if (prevState.find((prod) => prod.id === product.id)) {
        cartItems = prevState.map((prod) => {
          if (prod.id === product.id) {
            return { ...prod, quantity: prod.quantity + 1 };
          }

          return prod;
        });
        return cartItems;
      }
      product.quantity = 1;
      cartItems = [...prevState, product];
      return cartItems;
    });

    localStorage.setItem("cartProducts", JSON.stringify(cartItems));

    document.querySelector(".ProductPage_button__fYI4S").disabled = true;
    document.querySelector(".ProductPage_button__fYI4S").style.border =
      "1px solid lightgrey";
    document.querySelector(".ProductPage_button__fYI4S").style.color =
      "lightgrey";
    setTimeout(() => {
      document.querySelector(".ProductPage_button__fYI4S").disabled = false;
      document.querySelector(".ProductPage_button__fYI4S").style.border =
        "1px solid #D90429";
      document.querySelector(".ProductPage_button__fYI4S").style.color =
        "#D90429";
    }, 1000);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        consumer.setFilter(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  return (
    product && (
      <div className={s.productRoot}>
        <Submenue
          products={products}
          setProducts={setProducts}
          setFilter={consumer.setFilter}
        />
        <div key={product.id} className={s.productContainer}>
          <div className={s.imagesContainer}>
            <img className={s.image} src={product.image} alt="dassdadsa" />
            <img className={s.image} src={product.image} alt="dassdadsa" />
          </div>
          <div className={s.detailsContainer}>
            <p className={s.title}>{product.title}</p>
            <p className={s.price}>{product.price} USD</p>
            <div className={s.ratingContainer}>
              <Typography component="legend">
                Rating ({product.rating.rate})
              </Typography>
              <Rating
                className={s.rating}
                name="read-only"
                readOnly
                precision={0.1}
                value={product.rating.rate}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </div>
            <div className={s.sizeContainer}>
              <SizeDropdown />
            </div>
            <button
              className={s.button}
              onClick={(event) => {
                handleClick(event);
                {
                  notify();
                }
              }}
            >
              Add to cart
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
