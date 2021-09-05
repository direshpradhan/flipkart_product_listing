import React from "react";
import { useData } from "../../../../context/DataContext";
import styles from "./ProductFilters.module.css";

export const ProductFilters = () => {
  const { dispatch, sortBy, filterByBrands, filterBySizes, filterByIdealFor } =
    useData();

  const brands = ["Seven Rocks", "Tokyo Talkies", "Selvia", "Fast Colors"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const idealFor = ["Men", "Women"];

  return (
    <div className={`${styles.filters}`}>
      <fieldset>
        <legend>Sort by:</legend>

        <label htmlFor="LOW_TO_HIGH">
          {" "}
          <input
            type="radio"
            id="LOW_TO_HIGH"
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            onClick={() =>
              dispatch({ type: "SORT_BY", payload: "PRICE_LOW_TO_HIGH" })
            }
          />{" "}
          Low to High
        </label>

        <label htmlFor="HIGH_TO_LOW">
          {" "}
          <input
            type="radio"
            id="HIGH_TO_LOW"
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            onClick={() =>
              dispatch({ type: "SORT_BY", payload: "PRICE_HIGH_TO_LOW" })
            }
          />{" "}
          High to Low
        </label>
      </fieldset>

      <fieldset>
        <legend>Filter:</legend>
        <div>
          <h4>Brands:</h4>
          {brands.map((brand) => {
            return (
              <div>
                <label htmlFor={brand}>
                  {" "}
                  <input
                    type="checkbox"
                    id={brand}
                    checked={filterByBrands.includes(brand)}
                    onClick={() =>
                      dispatch({ type: "FILTER_BY_BRANDS", payload: brand })
                    }
                  />{" "}
                  {brand}
                </label>
              </div>
            );
          })}
        </div>

        <div>
          <h4>Sizes:</h4>
          {sizes.map((size) => {
            return (
              <div>
                <label htmlFor={size}>
                  {" "}
                  <input
                    type="checkbox"
                    id={size}
                    checked={filterBySizes.includes(size)}
                    onClick={() =>
                      dispatch({ type: "FILTER_BY_SIZE", payload: size })
                    }
                  />{" "}
                  {size}
                </label>
              </div>
            );
          })}
        </div>

        <div>
          <h4>Ideal for:</h4>
          {idealFor.map((ideal) => {
            return (
              <div>
                <label htmlFor={ideal}>
                  {" "}
                  <input
                    type="checkbox"
                    id={ideal}
                    checked={filterByIdealFor.includes(ideal)}
                    onClick={() =>
                      dispatch({
                        type: "FILTER_BY_IDEAL_FOR",
                        payload: ideal,
                      })
                    }
                  />{" "}
                  {ideal}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
      <button
        className={`${styles.clear_button}`}
        onClick={() => dispatch({ type: "RESET_FILTERS" })}
      >
        Clear All
      </button>
    </div>
  );
};
