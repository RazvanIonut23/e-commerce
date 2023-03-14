import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import s from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import logo from "../../images/logo.png";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import { context } from "../../App";

const Navbar = (props) => {
  const [active, setActive] = useState("");
  const consumer = useContext(context);

  return (
    <div className={s.containerRoot}>
      <div className={s.navContainer}>
        <Link to="/" className={s.logo}>
          <img src={logo} alt="" />
        </Link>
        <div className={s.buttonsContainer}>
          <Link
            to="/"
            className={`${s.button} ${
              active === "first" ? `${s.activeButton}` : ""
            }`}
            onClick={() => setActive("first")}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`${s.button} ${
              active === "second" ? `${s.activeButton}` : ""
            }`}
            onClick={() => setActive("second")}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`${s.button} ${
              active === "third" ? `${s.activeButton}` : ""
            }`}
            onClick={() => setActive("third")}
          >
            About
          </Link>
        </div>

        <Dropdown className={s.dropdownContainer}>
          <Dropdown.Toggle className={s.Dropdown} id="dropdown-basic">
            <MenuRoundedIcon />
          </Dropdown.Toggle>

          <Dropdown.Menu className={s.dropdownMenu}>
            <Dropdown.Item tar className={s.dropdownItem}>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            <Dropdown.Item className={s.dropdownItem}>
              {" "}
              <Link to="/products">Products</Link>
            </Dropdown.Item>
            <Dropdown.Item href="/about" className={s.dropdownItem}>
              {" "}
              <Link to="/about">About</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/" className={s.logMobile}>
          <img src={logo} alt="" />
        </Link>
        <div className={s.cartLoginContainer}>
          <Link to="./product/cart" className={s.cart}>
            <div className={s.cartIconMobile}>
              <img src={cart} alt="" />
              <span>
                (
                {consumer.details.reduce(
                  (acc, curentValue) => (acc += curentValue.quantity),
                  0
                )}
                )
              </span>
            </div>

            <span>
              Cart(
              {consumer.details.reduce(
                (acc, curentValue) => (acc += curentValue.quantity),
                0
              )}
              )
            </span>
          </Link>
          <div className={s.login}>
            <img src={user} alt="" />
            <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
