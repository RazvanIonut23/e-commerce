import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../../App";
import SearchBar from "./SearchBar";
import s from "./Sumbenue.module.css";

const Submenue = () => {
  const consumer = useContext(context);

  const [active, setActive] = useState("");
  const history = useNavigate();
  const filterProduct = (category) => {
    const updateList = consumer.products.filter((x) => x.category === category);
    consumer.setFilter(updateList);
  };

  return (
    <div className={s.containerRoot}>
      <div className={s.container}>
        <div className={s.buttonsContainer}>
          <button
            className={`${s.button} ${
              active === "first" ? `${s.activeButton}` : ""
            }`}
            onClick={() => {
              history("/products");
              setActive("first");
              consumer.setFilter(consumer.products);
            }}
          >
            All
          </button>
          <button
            className={`${s.button} ${
              active === "second" ? `${s.activeButton}` : ""
            }`}
            onClick={() => {
              history("");

              setActive("second");
              filterProduct("men's clothing");
            }}
          >
            Man
          </button>
          <button
            className={`${s.button} ${
              active === "third" ? `${s.activeButton}` : ""
            }`}
            onClick={() => {
              history("");

              setActive("third");
              filterProduct("women's clothing");
            }}
          >
            Women
          </button>
          <button
            className={`${s.button} ${
              active === "fourth" ? `${s.activeButton}` : ""
            }`}
            onClick={() => {
              history("");

              setActive("fourth");
              filterProduct("jewelery");
            }}
          >
            Jeweleries
          </button>
          <button
            className={`${s.button} ${
              active === "fifth" ? `${s.activeButton}` : ""
            }`}
            onClick={() => {
              history(`/products`);
              setActive("fifth");
              filterProduct("electronics");
            }}
          >
            Electronics
          </button>
        </div>
        <SearchBar
          filter={consumer.filter}
          setFilter={consumer.setFilter}
          products={consumer.setProducts}
        />
      </div>
    </div>
  );
};

export default Submenue;
