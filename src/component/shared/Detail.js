import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContextProvider";
import Style from "./Detail.module.css";
export default function Detail() {
  const { id } = useParams();
  const Product = useContext(ProductContext);
  const item = Product[id - 1];
  const { title, image, description, price } = item;
  // console.log(item);
  return (
    <>
      <div>
        <div className={Style.container}>
          <img alt="logo" src={image} />
          <div className={Style.txtArea}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>Cost: {price}$</h4>
            <div className={Style.butt}>
              <Link to="/shop">
                <p>Back To Shop</p>
              </Link>
            </div>
              {/* <Button variant='info' className="btn-info-outline">Back</Button> */}
          </div>
        </div>
        <a href="https://icons8.com/icon/85458/minus">Minus icon by Icons8</a>
      </div>
    </>
  );
}
