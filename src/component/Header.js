import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Style from "./Header.module.css";
import LOGO from "../logo.svg";
import { CartContext } from "../Context/CartContextProvider";

export default function Header() {
    // localStorage.setItem('username',JSON.stringify({cond:false,user:''}))
  const { state } = useContext(CartContext);
  const [local,setLocal] = useState({cond:false,user:""});
  
  useEffect(()=>{
    const getPerson = () =>{
      setLocal(JSON.parse(localStorage.getItem('username')));
    }
    getPerson();
  },[])
  //logout handler
  const logOutHandler = ()=>{
    localStorage.setItem('username',JSON.stringify({cond:false,user:''}))
    window.location.reload();
  }
  return (
    <div className={Style.container}>
      <ul className={Style.list}>
        <li>
          <img className={Style.logo} src={LOGO} alt="logo" />
        </li>
        <li>
          <h2>SHOPPY</h2>
        </li>
        <li>
          <NavLink
            to={"/"}
            style={({ isActive }) => {
              return {
                display: "block",
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "white" : "black",
              };
            }}
            className={Style.navlink}
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
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "white" : "black",
              };
            }}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/signup"}
            style={({ isActive }) => {
              return {
                display: "block",
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "white" : "black",
              };
            }}
            
          >   
//           {local.user === '' && 'login'}
          {local.user!== '' && local.user}
          {/* {console.log(local)} */}
          {/* {useEffect(()=>{
           const showPerson=()=>{
            console.log(local.cond)
            if(local.cond)
            return (local.user);
            else
            return ('login');
           }
           showPerson()
          },[local])} */}
          {/* {console.log(JSON.parse(localStorage.getItem('username')).cond)} */}
          {/* first try run but need update */}
          {/* {JSON.parse(localStorage.getItem('username')).cond ? 
          JSON.parse(localStorage.getItem('username')).user
          :'Login'} */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/signup"}
            style={({ isActive }) => {
              return {
                display: "block",
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "white" : "black",
              };
            }}
          >
          {local.cond ? <p style={{color:'red'}} onClick={logOutHandler}>Logout</p>:''}
          </NavLink>
        </li>
        <li className={Style.liCart}>
          <Link to={"/cart"}>
            <img
              alt="logo"
              className={Style.cardImg}
              src={'https://img.icons8.com/fluency/48/000000/shopping-cart-loaded.png'}
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
