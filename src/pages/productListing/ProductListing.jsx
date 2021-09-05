import React from "react";
import data from "../../data/data.json";

export const ProductListing = () => {
  return (
    <div>
      {data.products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.img} alt="Product_Image" />
            <div>
              <h3>{product.image}</h3>
              <p>{product.brand}</p>
              <p>{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
