import React from "react";
import data from "../../data/data.json";
import { ProductCard } from "./components/productCard/ProductCard";
import styles from "./ProductListing.module.css";

export const ProductListing = () => {
  const brands = ["Seven Rocks", "Tokyo Talkies", "Selvia", "Fast Colors"];
  return (
    <div>
      <div>
        <fieldset>
          <legend>Sort by:</legend>
          <input type="radio" id="LOW_TO_HIGH" />
          <label htmlFor="LOW_TO_HIGH">Low to High</label>
          <input type="radio" id="HIGH_TO_LOW" />
          <label htmlFor="HIGH_TO_LOW">High to Low</label>
        </fieldset>
        <fieldset>
          <legend>Filter:</legend>
          <div>
            <p>Brands:</p>
            {brands.map((brand) => {
              return (
                <div>
                  <input type="checkbox" id={brand} />
                  <label htmlFor={brand}>{brand}</label>
                </div>
              );
            })}
            {/* <input type="radio" id="LOW_TO_HIGH" />
            <label htmlFor="LOW_TO_HIGH">Low to High</label>
            <input type="radio" id="HIGH_TO_LOW" />
            <label htmlFor="HIGH_TO_LOW">High to Low</label> */}
          </div>
        </fieldset>
      </div>

      <div className={`${styles.product_container}`}>
        {data.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
