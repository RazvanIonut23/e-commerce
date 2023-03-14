import React from "react";
import HomeCarousel from "../../Pages/HomeCarousel/HomeCarousel";
import Homeproducts from "../../Pages/HomeProducts/Homeproducts";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.container}>
      <HomeCarousel />
      <div className={s.textC}>
        <p className={s.text}>New Colection</p>
      </div>
      <Homeproducts />
      <div className={s.textC}>
        <p className={s.text}>Explore our shop</p>
      </div>
      <Homeproducts />
    </div>
  );
};

export default Home;
