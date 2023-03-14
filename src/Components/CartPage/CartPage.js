import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { context } from "../../App";
import Submenue from "../Products/Submenue";
import s from "./CartPage.module.css";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TotalPage from "./TotalPage";

const CartPage = () => {
  const consumer = useContext(context);
  let shippyng = 20;
  const notify = () => toast();

  useEffect(() => {
    let aux = [];
    for (let i = 0; i < consumer.details.length; i++) {
      aux.push(1);
    }
    consumer.setQuantity(aux);
  }, []);

  // const handleChange = (event, index) => {
  //   let aux = [...consumer.quantity];
  //   aux[index] = event.target.value;
  //   consumer.setQuantity(aux);
  //   event.preventDefault();
  // };

  const handleClickDlete = (id, event) => {
    toast.error("Removed from cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    let aux = [];

    for (let i = 0; i < consumer.details.length; i++) {
      if (consumer.details[i].id !== id) {
        aux.push(consumer.details[i]);
      }
    }
    consumer.setDetails(aux);
    localStorage.setItem("cartProducts", aux);
    event.preventDefault();
  };

  const getTotalPrices = () => {
    let sum = 0;
    for (let i = 0; i < consumer.details.length; i++) {
      sum += consumer.details[i].price * consumer.details[i].quantity;
    }
    return sum;
  };

  const getFinalPrice = () => {
    let sum = 0;
    for (let i = 0; i < consumer.details.length; i++) {
      sum += consumer.details[i].price * consumer.details[i].quantity;
    }
    return sum + shippyng;
  };

  const hadleIncrement = (id) => {
    const aux = [...consumer.details];
    for (let i = 0; i < consumer.details.length; i++) {
      if (consumer.details[i].id === id) {
        aux[i].quantity += 1;
      }
    }
    consumer.setDetails(aux);
  };

  const hadleDecrement = (id) => {
    const aux = [...consumer.details];
    for (let i = 0; i < consumer.details.length; i++) {
      if (consumer.details[i].id === id) {
        if (aux[i].quantity > 1) aux[i].quantity -= 1;
      }
    }
    consumer.setDetails(aux);
  };

  return (
    consumer.quantity && (
      <>
        <Submenue />
        <div className={s.cartRoot}>
          <div className={s.cartContainer}>
            <h2>Shopping Cart</h2>
            <div className={s.tableContainer}>
              <tabel className={s.table}>
                <tr>
                  <th className={s.name}>Product</th>
                  <th>Price</th>
                  <th>Size</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th className={s.delete}></th>
                </tr>
              </tabel>
              {consumer.details.map((item, key) => {
                return (
                  <table className={s.table}>
                    <tr>
                      <td className={s.name}>
                        <img
                          src={item.image}
                          alt={item.title.substring(0, 15) + "..."}
                          style={{ width: "80px" }}
                        />
                        <p style={{ fontWeight: "600" }}>
                          {item.title.substring(0, 20)}
                        </p>
                      </td>
                      <td>{item.price} $</td>
                      <td>{consumer.size}</td>
                      <td className={s.quantityButtons}>
                        <span onClick={() => hadleDecrement(item.id)}>
                          <RemoveIcon />
                        </span>

                        <p>{item.quantity}</p>
                        <span onClick={() => hadleIncrement(item.id)}>
                          <AddIcon />
                        </span>
                      </td>
                      <td className={s.price}>
                        {(item.price * item.quantity).toFixed(2)}${" "}
                      </td>
                      <td className={s.deleteTwo}>
                        <p
                          className={s.deleteBtn}
                          onClick={() => {
                            handleClickDlete(item.id);
                            {
                              notify();
                            }
                          }}
                        >
                          x
                        </p>
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
                      </td>
                    </tr>
                  </table>
                );
              })}

              <div className={s.buyContainer}>
                <div className={s.buyDetails}>
                  <p>
                    Subtotal <span>{getTotalPrices().toFixed(2)}</span>
                  </p>
                  <p>
                    Shipping fee <span>{shippyng}$</span>
                  </p>
                </div>
                <div className={s.finalTotal}>
                  <p className={s.finalTotalPA}>
                    TOTAL<span>{getFinalPrice().toFixed(2)}$</span>{" "}
                  </p>
                </div>
                <div className={s.checkoutBtn}>
                  <Link to="/adress">
                    <button type="button" className={s.checkoutButton}>
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {consumer.details.map((item, key) => {
            return (
              <div className={s.mobileContainerRoot}>
                <div className={s.productContainerMobile}>
                  <img
                    src={item.image}
                    alt={item.title.substring(0, 5)}
                    className={s.imgMobile}
                  />
                  <div className={s.detailsMobileRoot}>
                    <div className={s.detailsFirst}>
                      <p>{item.title.substring(0, 30)}</p>
                      <DeleteOutlineIcon
                        className={s.deleteIcon}
                        onClick={() => handleClickDlete(item.id)}
                      />
                    </div>
                    <div className={s.detailsSecond}>
                      <p>{(item.price * consumer.quantity[key]).toFixed(2)}$</p>
                      <div className={s.quantityButtonsMobile}>
                        <span onClick={() => hadleDecrement(item.id)}>
                          <RemoveIcon />
                        </span>

                        <p>{item.quantity}</p>
                        <span onClick={() => hadleIncrement(item.id)}>
                          <AddIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.totalContainerMobile}>
                  <p>
                    Subtotal(
                    {consumer.details.reduce(
                      (acc, curentValue) => (acc += curentValue.quantity),
                      0
                    )}
                    ) <span>{getTotalPrices().toFixed(2)}$</span>
                  </p>
                  <p>
                    Shipping <span>{shippyng}$</span>
                  </p>
                  <h4>
                    Total Price <span>{getFinalPrice().toFixed(2)}$</span>
                  </h4>
                </div>
                <div className={s.checkoutBtn}>
                  <Link to="/adress">
                    <button type="button" className={s.checkoutButton}>
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default CartPage;
