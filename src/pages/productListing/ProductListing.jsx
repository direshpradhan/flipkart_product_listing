import React from "react";
import { useData } from "../../context/DataContext";
import { ProductCard } from "./components/productCard/ProductCard";
import styles from "./ProductListing.module.css";

export const ProductListing = () => {
  const brands = ["Seven Rocks", "Tokyo Talkies", "Selvia", "Fast Colors"];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const idealFor = ["Men", "Women"];
  const {
    dispatch,
    sortBy,
    products,
    filterByBrands,
    filterBySizes,
    filterByIdealFor,
  } = useData();

  function getSortedData(products, sortBy) {
    if (sortBy === "PRICE_LOW_TO_HIGH") {
      return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "PRICE_HIGH_TO_LOW") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  }

  function getFilteredData(
    products,
    { filterByBrands, filterBySizes, filterByIdealFor }
  ) {
    if (filterBySizes.length !== 0) {
      products = products.filter((product) => {
        let isSizePresent = false;
        filterBySizes.forEach((size) => {
          if (product.size.includes(size)) {
            isSizePresent = true;
          }
        });
        return isSizePresent;
      });
    }
    return products
      .filter((product) =>
        filterByBrands.length !== 0
          ? filterByBrands.includes(product.brand)
          : true
      )
      .filter((product) =>
        filterByIdealFor.length !== 0
          ? filterByIdealFor.includes(product.idealFor)
          : true
      );
  }

  const sortedData = getSortedData(products, sortBy);
  const filteredData = getFilteredData(sortedData, {
    filterByBrands,
    filterBySizes,
    filterByIdealFor,
  });
  console.log(filteredData);

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.filter}`}>
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
      </div>

      <div className={`${styles.product_container}`}>
        {filteredData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
