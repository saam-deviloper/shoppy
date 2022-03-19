import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContextProvider";
import Style from "./Cart.module.css";
export default function Cart(props) {
  const { image, title, price, quantity } = props.data;
  const {dispatch} = useContext(CartContext);
  return (
    <>
      <div className={Style.container}>
        <img alt="logo" src={image} className={Style.img} />
        <div className={Style.txtContainer}>
          <h4>{title}</h4>
          <br />
          <h4>{price}$</h4>
          <h1>x {quantity}</h1>
          <div>
            {quantity > 1 ? 
            <button onClick={()=>{dispatch({type:'DECREASE',payload:props.data})}}>-</button>
            :<button onClick={()=>{dispatch({type:'REMOVE_VALUE',payload:props.data})}}>trash</button>}
            <button onClick={()=>{dispatch({type:'INCREASE',payload:props.data})}} >+</button>
          </div>
        </div>
      </div>
    </>
  );
}
