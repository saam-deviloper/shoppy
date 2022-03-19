import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContextProvider";
import Cart from "./Cart";
import Style from "./ShopCart.module.css";
export default function CartShop() {
  const [cond,setCond] = useState(false)
  const { state,dispatch } = useContext(CartContext);
  return (
      <div className={Style.container}>
       <div className={Style.items}>{state.selectedItems.length>0?
        <div>
        {state.selectedItems.map((product) => (
          <Cart key={product.id} data={product} />
        ))}
        </div>:
        <div><h3>Shop list is empty</h3>
        <Link to="/shop">
                <p>Back To Shop</p>
              </Link>
        </div>
       } 
       </div>
       {state.totalCount > 0 && 
       <div className={Style.checkOut}>
           {cond ? <h1 style={{color:'green'}}>Checkout Successfully!</h1>
           :<h1 >Checkout</h1>}
           <p>Item:{state.totalCount}</p>
           <p>Total:{state.totalPrice}$</p>
           <button onClick={()=>{setCond(!cond);
           setTimeout(()=>{dispatch({type:'CHECKOUT'})},2000)}}>checkout!</button>
           <Link to={'/shop'} onClick={()=>{dispatch({type:"CLEAR"})}} style={{color:'red',textDecoration:'none'}}>Clear all</Link>
       </div>}
      </div>
  );
}
