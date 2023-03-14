import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoaderExampleLoader from "../../Assets/Loader/Loader";
import s from "./HomeProducts.module.css";

const Homeproducts = () => {
  const [image, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setImg(
          data.slice(0, 4).map((item, id) => (
            <Link to={`/product/${item.id}`} className={s.link}>
              <div key={id} className={s.productContainer}>
                <img className={s.image} src={item.image} alt="dassdadsa" />
                <div className={s.infos}>
                  <p className={s.title}>{item.title.substring(0, 30)}...</p>
                  <p className={s.price}>{item.price} USD</p>
                </div>
              </div>
            </Link>
          ))
        );
      });
  }, []);
  return loading ? (
    <LoaderExampleLoader />
  ) : (
    <div className={s.conatinerRoot}>
      <div className={s.containerContainer}>{image}</div>
    </div>
  );
};

export default Homeproducts;
