import React, { useContext } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import Style from "./Header.module.css";
import LOGO from "../logo.svg";
import { CartContext } from "../Context/CartContextProvider";
export default function Header() {
  const { state } = useContext(CartContext);

  return (
    <div className={Style.container}>
      <ul className={Style.list}>
        <li>
          <img className={Style.logo} src={LOGO} alt="logo" />
        </li>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                display: "block",
                // margin: "1rem 0",
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "white" : "black",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/shop"}
            style={({ isActive }) => {
              return {
                display: "block",
                // margin: "1rem 0",
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "white" : "black",

              };
            }}
          >
            Shop
          </NavLink>
        </li>
        <li className={Style.liCart}>
          <Link to={"/cart"}>
            <img
              className={Style.cardImg}
              src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png"
            />
            {state.totalCount >= 1 && (
              <span className={Style.spanCount}>{state.totalCount}</span>
            )}
          </Link>
        </li>
      
      </ul>
    </div>
  );
}