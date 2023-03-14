import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import s from "./AdressPage.module.css";

import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { context } from "../../App";

const AdressPage = () => {
  const navigate = useNavigate();

  const consumer = useContext(context);
  let shippyng = 20;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors.password);

  const onSubmit = (event, id) => {
    toast.success("Order Placed Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setTimeout(() => {
      navigate("/");
      let aux = [];

      for (let i = 0; i > consumer.details.length; i++) {
        if (consumer.details[i].id !== id) {
          aux.push(consumer.details[i]);
        }
      }
      consumer.setDetails(aux);
      localStorage.clear("cartProducts", aux);
    }, 4000);

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

  return (
    <div className={s.orderRoot}>
      <h2 className={s.headingtwo}>Order completion</h2>

      <div className={s.orderContainer}>
        <div className={s.datesAndAdress}>
          <h4>My dates</h4>
          <Form onSubmit={handleSubmit(onSubmit)} className={s.formContainer}>
            <Form.Field>
              <label>First Name</label>
              <input
                placeholder="First Name"
                type="text"
                {...register("firstName", { required: true, maxLength: 20 })}
              />
            </Form.Field>
            {errors.firstName && <p>*Please check the First Name</p>}
            <Form.Field>
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                {...register("lastName", { required: true, maxLength: 20 })}
              />
            </Form.Field>
            {errors.lastName && <p>*Please check the Last Name</p>}
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </Form.Field>
            {errors.email && <p>*Please check the Email</p>}
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  minLength: 8,
                })}
              />
            </Form.Field>
            {errors.password && (
              <p className={s.passwordError}>
                Your password needs to:{" "}
                <span>-include both lower and upper case characters.</span>
                <span>-include at least 1 number.</span>
                <span>-be at least 8 characters long</span>
              </p>
            )}
            <h4>My adress</h4>
            <Form.Field>
              <label>Adress</label>
              <input
                placeholder="Adress"
                type="text"
                {...register("adress", { required: true, maxLength: 100 })}
              />
            </Form.Field>
            {errors.adress && <p>*Please check the adress</p>}
            <Form.Field>
              <label>City/Locality</label>
              <input
                placeholder="City/Locality"
                type="text"
                {...register("cityLocality", {
                  required: true,
                  maxLength: 100,
                })}
              />
            </Form.Field>
            {errors.cityLocality && <p>*Please check the City/Locality</p>}
            <Form.Field>
              <label>Postal Code</label>
              <input
                placeholder="Postal Code"
                type="number"
                {...register("postalCode", {
                  required: true,
                  minLength: 6,
                  maxLength: 6,
                })}
              />
            </Form.Field>
            {errors.postalCode && (
              <p>*Please check the Postal Code(6 numbers)</p>
            )}
            <Button type="submit" fluid className={s.checkoutButton}>
              Place order
            </Button>

            <ToastContainer />
          </Form>
        </div>

        <div className={s.total}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressPage;
