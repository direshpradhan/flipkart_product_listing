import data from "../data/data.json";

export const initialState = {
  products: [],
  sortBy: null,
  filterByBrands: [],
  filterBySizes: [],
  filterByIdealFor: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_PRODUCTS":
      return { ...state, products: data.products };

    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "FILTER_BY_BRANDS":
      const isBrandPresent = state.filterByBrands.includes(action.payload);
      return {
        ...state,
        filterByBrands: isBrandPresent
          ? state.filterByBrands.filter((brand) => brand !== action.payload)
          : [...state.filterByBrands, action.payload],
      };

    case "FILTER_BY_SIZE":
      console.log("entered..");
      console.log(action.payload);
      const isSizePresent = state.filterBySizes.includes(action.payload);
      console.log(isSizePresent);
      return {
        ...state,
        filterBySizes: isSizePresent
          ? state.filterBySizes.filter((size) => size !== action.payload)
          : [...state.filterBySizes, action.payload],
      };

    case "FILTER_BY_IDEAL_FOR":
      const isIdealForPresent = state.filterByIdealFor.includes(action.payload);
      return {
        ...state,
        filterByIdealFor: isIdealForPresent
          ? state.filterByIdealFor.filter(
              (idealFor) => idealFor !== action.payload
            )
          : [...state.filterByIdealFor, action.payload],
      };

    default:
      return state;
  }
};
