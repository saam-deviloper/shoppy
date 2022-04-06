import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContextProvider";
import Product from "./shared/Product";
import Style from "./Shop.module.css";
export default function Shop() {
  const Products = useContext(ProductContext);
  const [cate, setCate] = useState("all");
  const selectedCategory = Products.filter(
    (product) => product.category === cate.toString()
  );
  return (
    <>
      <div className={Style.bread}>
        <img
          alt="logo"
          style={{ width: "60px", height: "60px" }}
          className={Style.breadImg}
          src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-menu-multimedia-kiranshastry-gradient-kiranshastry.png"
        />
        <h2 className={Style.titleBread}>Our newest products</h2>
        <div style={{ color: "dodgerblue", padding: "5px" }}>
          Category:
          <button
            className={Style.breadCrumb}
            onClick={() => {
              setCate("all");
            }}
          >
            All
          </button>
          /
          <button
            className={Style.breadCrumb}
            onClick={() => {
              setCate("men's clothing");
            }}
          >
            Men's clothing
          </button>
          /
          <button
            className={Style.breadCrumb}
            onClick={() => {
              setCate("women's clothing");
            }}
          >
            women's clothing
          </button>
          /
          <button
            className={Style.breadCrumb}
            onClick={() => {
              setCate("jewelery");
            }}
          >
            jewelery
          </button>
          /
          <button
            className={Style.breadCrumb}
            onClick={() => {
              setCate("electronics");
            }}
          >
            electronics
          </button>
        </div>
      </div>
      {Products.length > 0 ? (
        <div className={Style.container}>
          {cate === "all"
            ? Products.map((product) => (
                <Product key={product.id} productData={product} />
              ))
            : selectedCategory.map((product) => (
                <Product key={product.id} productData={product} />
              ))}
        </div>
      ) : (
        <div className={Style.Loading}>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}
