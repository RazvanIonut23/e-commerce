import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../../App";
import LoaderExampleLoader from "../../Assets/Loader/Loader";
import s from "./Products.module.css";
import Submenue from "./Submenue";

const Products = () => {
  const consumer = useContext(context);
  console.log(consumer.filter);

  useEffect(() => {
    consumer.setLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        consumer.setProducts(data);
        consumer.setFilter(data);
        consumer.setLoading(false);
      });
  }, []);

  const renderTitle = () => {
    if (consumer.filter !== undefined) {
      if (consumer.filter.length === consumer.products.length) {
        return (
          <>
            <h3>We've got everythig!</h3>
            <p>
              Welcome to our online store! We offer a wide variety of products
              to suit all your needs.Shop with ease and confidence, knowing that
              all of our products are carefully selected for their quality and
              style. Browse our selection today and find the perfect addition to
              you or your wardrobe.
            </p>
          </>
        );
      } else
        switch (consumer.filter[0].category) {
          case "men's clothing":
            return (
              <>
                <h3>Clothing</h3>
                <p>
                  Welcome to our men's clothing store! We specialize in
                  providing high-quality, stylish garments for the modern man.
                  We carefully curate our selection of brands to ensure that you
                  have access to the latest trends and the best quality. Browse
                  our selection today and elevate your wardrobe.
                </p>
              </>
            );
          case "women's clothing":
            return (
              <>
                <h3>Dresses</h3>
                <p>
                  Off-the-shoulder dresses are a wardrobe essential if you want
                  to adopt a new style in just a few scrolls. Cheerful and
                  feminine, our collection has everything from summer-perfect
                  floral prints to lace and ruffles, midi and maxi styles. Pair
                  them with white sneakers for a casual look or discover other
                  styles, including denim dresses and maxi dresses .
                </p>
              </>
            );
          case "jewelery":
            return (
              <>
                <h3>Accessoryes</h3>
                <p>
                  Welcome to our jewelry store! We offer a wide variety of
                  beautiful, high-quality pieces that are perfect for any
                  occasion. From elegant diamond rings to delicate gold
                  necklaces, our collection features something for everyone.
                  Browse our collection today and find the perfect accessory to
                  add a touch of sparkle to your life.
                </p>
              </>
            );
          case "electronics":
            return (
              <>
                <h3>Smart Accessoryes</h3>
                <p>
                  Welcome to our electronics store! We offer the latest and
                  greatest in consumer technology. Whether you're in the market
                  for a new laptop, smartphone, or smart home device, we've got
                  you covered. Browse our selection today and discover the
                  latest in technology innovation.
                </p>
              </>
            );
          default:
            break;
        }
    }
  };

  return (
    <div className={s.continerRoot}>
      <Submenue />
      <div className={s.textes}>{renderTitle()}</div>
      {consumer.loading ? (
        <LoaderExampleLoader />
      ) : (
        <div className={s.productsContainer}>
          {consumer.filter !== undefined &&
            consumer.filter.map((item, id) => (
              <Link
                to={`/product/${item.id}`}
                key={id}
                className={s.productContainer}
              >
                <img className={s.image} src={item.image} alt="dassdadsa" />
                <div className={s.infos}>
                  <p className={s.title}>{item.title.substring(0, 35)}...</p>
                  <p className={s.price}>{item.price} $</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
