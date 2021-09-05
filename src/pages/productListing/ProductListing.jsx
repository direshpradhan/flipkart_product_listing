import React from "react";
import { useData } from "../../context/DataContext";
import { ProductCard } from "./components/productCard/ProductCard";
import { ProductFilters } from "./components/productFilters/ProductFilters";
import styles from "./ProductListing.module.css";

export const ProductListing = () => {
  const { sortBy, products, filterByBrands, filterBySizes, filterByIdealFor } =
    useData();

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

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.filter}`}>
        <ProductFilters />
      </div>

      <div className={`${styles.product_container}`}>
        {filteredData.length > 0 ? (
          filteredData.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};
