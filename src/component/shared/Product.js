import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Style from "./Product.module.css";
//shorter title for better view
import { shortenTitle } from "../../helper/shortenTitle";
//context
import { CartContext } from "../../Context/CartContextProvider";
import { isInCart } from "../../helper/isInCart";
import { quantityCount } from "../../helper/quantityCount";

export default function Product({ productData }) {
  const { image, id, title, price } = productData;
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={Style.container}>
      {productData.length > 0 ?<img src={image} className={Style.img} alt="img" />:
      <img src={image} className={Style.img} alt="Loading" />}
      <h3 className={Style.title}>{shortenTitle(title)}</h3>
      <p>Cost:<span style={{color:'green',fontWeight:'600'}}>{price}$</span></p>
      <div className={Style.butts}>
        <Link to={`/shop/${id}`}>detail</Link>
        {quantityCount(state, id) === 1 &&
          <button className={Style.buttons}
            onClick={() => {
              dispatch({ type: "REMOVE_VALUE", payload: productData });
            }}><img alt="logo" src="https://img.icons8.com/ios-glyphs/30/000000/trash--v3.png"/></button>
        }
        {quantityCount(state, id) > 1 &&
          <button className={Style.buttons}
            onClick={() => {
              dispatch({ type: "DECREASE", payload: productData });
            }}>
              <img alt="logo" src="https://img.icons8.com/material-outlined/24/000000/minus.png"/>
            </button>
        }
        {quantityCount(state, id)}
        {isInCart(state, id) ? (
          <button className={Style.buttons}
              onClick={() => {
              dispatch({ type: "INCREASE", payload: productData });
            }}
          >
            <img alt="logo" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png"/>
          </button>
        ) : (
          <button className={Style.buttons}
            onClick={() => {
              dispatch({ type: "ADD_VALUE", payload: productData });
            }}
          >
          <img alt="logo" src="https://img.icons8.com/ios-glyphs/30/000000/buy--v1.png"/>
          </button>
        )}
      </div>
    </div>
  );
}
// item added