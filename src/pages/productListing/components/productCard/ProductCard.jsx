import React from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  return (
    <>
      <div>
        <img
          src={product.img}
          alt="Product_Image"
          className={`${styles.product_image}`}
        />
        <div className={`${styles.product_data}`}>
          <p className={`${styles.name}`}>{product.name}</p>
          <p className={`${styles.brand}`}>{product.brand}</p>
          <div className={`${styles.pricing_details}`}>
            <p className={`${styles.price}`}> &#8377;{product.price}</p>
            <p className={`${styles.actualPrice}`}>
              {" "}
              &#8377;{product.actualPrice}
            </p>
          </div>
          <p className={`${styles.discount}`}> {product.discount}% off</p>
        </div>
      </div>
    </>
  );
};
